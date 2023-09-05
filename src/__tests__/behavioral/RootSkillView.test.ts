import {
	buttonAssert,
	interactor,
	vcAssert,
} from '@sprucelabs/heartwood-view-controllers'
import { AbstractSpruceFixtureTest } from '@sprucelabs/spruce-test-fixtures'
import { test } from '@sprucelabs/test-utils'
import RootSkillViewController from '../../skillViewControllers/Root.svc'

export default class RootSkillViewTest extends AbstractSpruceFixtureTest {
	private static vc: SpyRootSkillView

	protected static async beforeEach() {
		await super.beforeEach()

		this.views.setController('eightbitstories.root', SpyRootSkillView)
		this.vc = this.views.Controller(
			'eightbitstories.root',
			{}
		) as SpyRootSkillView
	}

	@test()
	protected static rendersCard() {
		vcAssert.assertSkillViewRendersCard(this.vc, 'controls')
	}

	@test()
	protected static rendersExpectedButtons() {
		buttonAssert.cardRendersButtons(this.cardVc, [
			'meta',
			'members',
			'generate',
		])
	}

	@test()
	protected static async clickingMetaRedirectsToMetaSkillView() {
		await this.views.load(this.vc)

		await vcAssert.assertActionRedirects({
			action: () => interactor.clickButton(this.cardVc, 'meta'),
			router: this.views.getRouter(),
			destination: {
				id: 'eightbitstories.meta',
			},
		})
	}

	private static get cardVc() {
		return this.vc.getCardVc()
	}
}

class SpyRootSkillView extends RootSkillViewController {
	public getCardVc() {
		return this.cardVc
	}
}
