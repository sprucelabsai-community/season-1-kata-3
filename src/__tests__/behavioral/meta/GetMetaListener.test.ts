import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId } from '@sprucelabs/test-utils'
import AbstractEightBitTest from '../../support/AbstractEightBitTest'

@fake.login()
export default class GetMetaListenerTest extends AbstractEightBitTest {
	protected static async beforeEach() {
		await super.beforeEach()
		await this.bootSkill()
	}

	@test()
	protected static async returnsEmptyMetaIfNoneSaved() {
		await this.assertReturnsNoMeta()
	}

	@test()
	protected static async returnsSavedMeta() {
		const expected = await this.seedMetaForPerson(this.fakedPerson.id)
		const actual = await this.emitGetMeta()

		//@ts-ignore
		delete expected.target

		assert.isEqualDeep(actual, expected)
	}

	@test()
	protected static async matchesTargetWhenGettingMeta() {
		await this.seedMetaForPerson(generateId())
		await this.assertReturnsNoMeta()
	}

	private static async assertReturnsNoMeta() {
		const meta = await this.emitGetMeta()
		assert.isFalsy(meta)
	}

	private static async seedMetaForPerson(personId: string) {
		const expected = this.eventFaker.generateRandomMetaWithTarget(personId)
		await this.metas.createOne(expected)
		return expected
	}

	private static async emitGetMeta() {
		const [results] = await this.fakedClient.emitAndFlattenResponses(
			'eightbitstories.get-meta::v2023_09_05'
		)

		return results?.meta
	}
}
