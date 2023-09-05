import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import listViewsResponsePayloadSchema from '#spruce/schemas/heartwood/v2021_02_11/listViewsResponsePayload.schema'

const listViewsEventContract = buildEventContract({
	eventSignatures: {
		'heartwood.list-views::v2021_02_11': {
			isGlobal: true,
			emitPermissions: {
				contractId: 'heartwood.skill-views',
				permissionIdsAny: ['can-list-skill-views'],
			},

			responsePayloadSchema: listViewsResponsePayloadSchema,
		},
	},
})
export default listViewsEventContract

export type ListViewsEventContract = typeof listViewsEventContract
