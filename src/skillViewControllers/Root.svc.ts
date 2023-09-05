import {
	AbstractSkillViewController,
	CardViewController,
	Router,
	SkillView,
	SkillViewControllerLoadOptions,
	ViewControllerOptions,
} from '@sprucelabs/heartwood-view-controllers'

export default class RootSkillViewController extends AbstractSkillViewController {
	public static id = 'root'
	protected cardVc: CardViewController
	private router!: Router

	public constructor(options: ViewControllerOptions) {
		super(options)
		this.cardVc = this.CardVc()
	}

	private CardVc(): CardViewController {
		return this.Controller('card', {
			id: 'controls',
			header: {
				title: '8 Bit Stories',
				image: 'https://storybook.spruce.bot/images/8bitstories.jpg',
			},
			body: {
				sections: [
					{
						buttons: [
							{
								id: 'meta',
								label: 'Family Values',
								onClick: this.handleClickMeta.bind(this),
							},
							{
								id: 'members',
								label: 'Family Members',
							},
							{
								id: 'generate',
								label: 'Generate Story',
								type: 'primary',
							},
						],
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
	}

	private async handleClickMeta() {
		await this.router.redirect('eightbitstories.meta')
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
