import {
	SpruceSchemas,
	formAssert,
	interactor,
	vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { eventFaker, fake } from '@sprucelabs/spruce-test-fixtures'
import { assert, generateId, test } from '@sprucelabs/test-utils'
import { GetMeta } from '../../../eightbitstories.types'
import MetaSkillViewController from '../../../meta/Meta.svc'
import AbstractEightBitTest from '../../support/AbstractEightBitTest'

@fake.login()
export default class MetaSkillViewTest extends AbstractEightBitTest {
	private static vc: SpyMetaSkillView
	private static passedMeta?: SpruceSchemas.Eightbitstories.v2023_09_05.GetMeta
	private static meta: GetMeta

	public static async beforeEach() {
		await super.beforeEach()
		this.views.setController('eightbitstories.meta', SpyMetaSkillView)

		this.vc = this.MetaVc()
		this.meta = this.eventFaker.generateRandomMeta()

		await this.eventFaker.fakeGetMeta(() => this.meta)

		await this.loadVc()

		delete this.passedMeta
		await this.eventFaker.fakeSaveMeta(({ payload }) => {
			this.passedMeta = payload.meta
			return {
				meta: this.meta,
			}
		})
	}

	@test()
	protected static async requiresBeingLoggedIn() {
		vcAssert.assertLoginIsRequired(this.vc)
	}

	@test()
	protected static async rendersACard() {
		vcAssert.assertSkillViewRendersCard(this.vc)
	}

	@test()
	protected static async redirectsOnClickToCancel() {
		await this.assertFormActionRedirectsToRoot('back')
	}

	@test()
	protected static async rendersAlertIfSaveFails() {
		await eventFaker.makeEventThrow('eightbitstories.save-meta::v2023_09_05')
		await vcAssert.assertRendersAlert(this.vc, () => this.submitForm())
	}

	@test()
	protected static async submittingEmitsSaveMetaEvent() {
		const { name, values } = await this.randomizeMetaAndSetFormValues()

		await this.submitFormAndAssertRedirect()

		assert.isEqualDeep(this.passedMeta, {
			name,
			values,
		})
	}

	@test()
	protected static async redirectsOnClickToSave() {
		await this.randomizeMetaAndSetFormValues()
		await this.assertFormActionRedirectsToRoot('save')
	}

	@test()
	protected static async rendersForm() {
		formAssert.cardRendersForm(this.cardVc)
	}

	@test()
	protected static async rendersExpectedFormFields() {
		formAssert.formRendersFields(this.formVc, ['name', 'values'])
	}

	@test()
	protected static async loadingViewLoadsMeta() {
		const values = this.formVc.getValues()
		assert.isEqualDeep(values, this.meta)
	}

	private static MetaVc(): SpyMetaSkillView {
		return this.views.Controller('eightbitstories.meta', {}) as SpyMetaSkillView
	}

	private static async submitFormAndAssertRedirect() {
		await vcAssert.assertActionRedirects({
			action: () => this.submitForm(),
			router: this.views.getRouter(),
		})
	}

	private static async randomizeMetaAndSetFormValues() {
		this.meta.name = generateId()
		this.meta.values = generateId()
		await this.fillOutForm({ ...this.meta })
		return this.meta
	}

	private static async fillOutForm(meta: GetMeta) {
		await this.formVc.setValues({
			...meta,
		})
	}

	private static async assertFormActionRedirectsToRoot(
		action: 'back' | 'save'
	) {
		const strategy = {
			back: () => interactor.cancelForm(this.formVc),
			save: () => this.submitForm(),
		}

		await vcAssert.assertActionRedirects({
			action: () => strategy[action](),
			router: this.views.getRouter(),
			destination: {
				id: 'eightbitstories.root',
			},
		})
	}

	private static submitForm() {
		return interactor.submitForm(this.formVc)
	}

	private static async loadVc() {
		await this.views.load(this.vc)
	}

	private static get cardVc() {
		return this.vc.getCardVc()
	}

	private static get formVc() {
		return this.vc.getFormVc()
	}
}

class SpyMetaSkillView extends MetaSkillViewController {
	public getFormVc() {
		return this.formVc
	}
	public getCardVc() {
		return this.cardVc
	}
}
