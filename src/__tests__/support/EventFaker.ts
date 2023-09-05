import { SpruceSchemas, eventFaker } from '@sprucelabs/spruce-test-fixtures'
import { generateId } from '@sprucelabs/test-utils'
import { GetMeta } from '../../eightbitstories.types'

export default class EventFaker {
	public async fakeGetMeta(cb?: () => void | GetMeta) {
		await eventFaker.on('eightbitstories.get-meta::v2023_09_05', () => {
			return {
				meta: cb?.() ?? this.generateRandomMeta(),
			}
		})
	}

	public generateRandomMeta(): GetMeta {
		return {
			name: generateId(),
			values: generateId(),
		}
	}

	public generateRandomMetaWithTarget(personId: string) {
		return {
			...this.generateRandomMeta(),
			target: {
				personId,
			},
		}
	}

	public async fakeSaveMeta(
		cb?: (
			targetAndPayload: SpruceSchemas.Eightbitstories.v2023_09_05.SaveMetaEmitTargetAndPayload
		) => void
	) {
		await eventFaker.on(
			'eightbitstories.save-meta::v2023_09_05',
			(targetAndPayload) => {
				cb?.(targetAndPayload)
				return {
					meta: this.generateRandomMeta(),
				}
			}
		)
	}
}
