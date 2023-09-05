import {
	AbstractSkillViewController,
	CardViewController,
	FormViewController,
	Router,
	SkillView,
	SkillViewControllerLoadOptions,
	SpruceSchemas,
	ViewControllerOptions,
	buildForm,
} from '@sprucelabs/heartwood-view-controllers'
import metaSchema from '#spruce/schemas/eightbitstories/v2023_09_05/meta.schema'

export default class MetaSkillViewController extends AbstractSkillViewController {
	public static id = 'meta'
	protected cardVc: CardViewController
	protected formVc: FormViewController<MetaSchema>
	private router!: Router

	public constructor(options: ViewControllerOptions) {
		super(options)

		this.formVc = this.FormVc()
		this.cardVc = this.CardVc()
	}

	public async getIsLoginRequired() {
		return true
	}

	private FormVc(): FormViewController<MetaSchema> {
		return this.Controller(
			'form',
			buildForm({
				schema: metaSchema,
				onCancel: this.handleCancelForm.bind(this),
				onSubmit: this.handleSubmitForm.bind(this),
				sections: [
					{
						fields: [
							'name',
							{
								name: 'values',
								renderAs: 'textarea',
							},
						],
					},
				],
			})
		)
	}

	private CardVc(): CardViewController {
		return this.Controller('card', {
			header: {
				title: `Your Family`,
			},
			body: {
				isBusy: true,
				sections: [
					{
						form: this.formVc.render(),
					},
				],
			},
		})
	}

	public async load(
		options: SkillViewControllerLoadOptions<Record<string, any>>
	): Promise<void> {
		const { router } = options
		this.router = router

		await this.loadMeta()

		this.cardVc.setIsBusy(false)
	}

	private async loadMeta() {
		const client = await this.connectToApi()
		const [{ meta }] = await client.emitAndFlattenResponses(
			'eightbitstories.get-meta::v2023_09_05'
		)

		if (meta) {
			await this.formVc.setValues(meta)
		}
	}

	private async handleSubmitForm() {
		this.formVc.setIsBusy(true)
		try {
			await this.emitSave()
			await this.redirectToRoot()
		} catch (err: any) {
			this.alert({
				message: err.message ?? 'Failed to save your family details!',
			})
		}
		this.formVc.setIsBusy(false)
	}

	private async emitSave() {
		const client = await this.connectToApi()
		const { name, values } = this.formVc.getValues()
		await client.emitAndFlattenResponses(
			'eightbitstories.save-meta::v2023_09_05',
			{
				payload: {
					meta: {
						name: name!,
						values: values!,
					},
				},
			}
		)
	}

	private async handleCancelForm() {
		await this.redirectToRoot()
	}

	private async redirectToRoot() {
		await this.router.redirect('eightbitstories.root')
	}

	public render(): SkillView {
		return {
			layouts: [
				{
					cards: [this.cardVc.render()],
				},
			],
		}
	}
}

export type MetaSchema = SpruceSchemas.Eightbitstories.v2023_09_05.MetaSchema
