import { SimpleStoreFactory } from '@sprucelabs/data-stores'
import { SaveMeta } from '../eightbitstories.types'
import MetaStore from './Meta.store'

export default class MetaTracker {
	private readonly metas: MetaStore

	private constructor(metas: MetaStore) {
		this.metas = metas
	}

	public static async Tracker(stores: SimpleStoreFactory) {
		const metas = await stores.getStore('meta')
		return new this(metas)
	}

	public async getForPerson(personId: string) {
		const match = await this.metas.findOne({
			//@ts-ignore
			'target.personId': personId,
		})

		//@ts-ignore
		delete match?.id
		return match
	}

	public async saveForPerson(personId: string, meta: SaveMeta) {
		const count = await this.metas.count({
			//@ts-ignore
			'target.personId': personId!,
		})

		if (count === 0) {
			await this.metas.createOne({ ...meta, target: { personId: personId! } })
		} else {
			await this.metas.updateOne(
				{
					//@ts-ignore
					'target.personId': personId!,
				},
				{
					...meta,
				}
			)
		}
	}
}
