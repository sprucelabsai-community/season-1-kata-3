import { AbstractSpruceFixtureTest } from '@sprucelabs/spruce-test-fixtures'
import MetaStore from '../../meta/Meta.store'
import EventFaker from './EventFaker'

export default abstract class AbstractEightBitTest extends AbstractSpruceFixtureTest {
	protected static eventFaker: EventFaker
	protected static metas: MetaStore
	protected static async beforeEach() {
		await super.beforeEach()
		this.eventFaker = new EventFaker()
		this.metas = await this.stores.getStore('meta')
	}
}
