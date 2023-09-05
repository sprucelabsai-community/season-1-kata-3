import { MercuryClient } from '@sprucelabs/mercury-client'
import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test, assert, generateId } from '@sprucelabs/test-utils'
import { SaveMeta } from '../../../eightbitstories.types'
import AbstractEightBitTest from '../../support/AbstractEightBitTest'

@fake.login()
export default class SaveMetaListenerTest extends AbstractEightBitTest {
	private static meta: SaveMeta

	protected static async beforeEach() {
		await super.beforeEach()
		await this.bootSkill()
		this.meta = this.eventFaker.generateRandomMetaWithTarget(
			this.fakedPerson.id
		)
	}

	@test()
	protected static async savesOneMeta() {
		await this.emitSaveMeta()
		await this.assertFirstMetaIsExpected()
	}

	@test()
	protected static async savesOnlyOnceForSamePerson() {
		await this.emitSaveMeta()
		await this.emitSaveMeta()
		await this.assertTotalMetaRecords(1)
	}

	@test()
	protected static async updatesForSamePerson() {
		await this.emitSaveMeta()
		this.randomizeMetaNameAndValues()
		await this.emitSaveMeta()
		await this.assertFirstMetaIsExpected()
	}

	@test()
	protected static async savesForDifferentPerson() {
		await this.emitSaveMeta()
		await this.emitAsDifferentPerson()
		await this.assertTotalMetaRecords(2)
	}

	@test()
	protected static async savesForDifferentPersonAndUpdates() {
		await this.emitSaveMeta()
		const expected = { ...this.meta }

		const client = await this.emitAsDifferentPerson()
		this.randomizeMetaNameAndValues()

		await this.emitSaveMeta(client)
		await this.assertFirstMetaIsExpected(expected)
	}

	private static async emitAsDifferentPerson() {
		const { client } = await this.people.loginAsDemoPerson('555-555-0000')
		await this.emitSaveMeta(client)
		return client
	}

	private static async assertTotalMetaRecords(expected: number) {
		const count = await this.metas.count()
		assert.isEqual(count, expected)
	}

	private static randomizeMetaNameAndValues() {
		this.meta.name = generateId()
		this.meta.values = generateId()
	}

	private static async assertFirstMetaIsExpected(values?: SaveMeta) {
		const match = await this.metas.findOne(
			{},
			{
				includeFields: ['name', 'values', 'target'],
				shouldIncludePrivateFields: true,
			}
		)
		assert.isEqualDeep(match, values ?? this.meta)
	}

	private static async emitSaveMeta(client?: MercuryClient) {
		const { ...values } = this.meta
		//@ts-ignore
		delete values.target
		await (client ?? this.fakedClient).emitAndFlattenResponses(
			'eightbitstories.save-meta::v2023_09_05',
			{
				payload: {
					meta: values,
				},
			}
		)
	}
}
