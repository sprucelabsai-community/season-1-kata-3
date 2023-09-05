import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import upsertThemeEmitTargetAndPayloadSchema from '#spruce/schemas/heartwood/v2021_02_11/upsertThemeEmitTargetAndPayload.schema'
import upsertThemeResponsePayloadSchema from '#spruce/schemas/heartwood/v2021_02_11/upsertThemeResponsePayload.schema'

const upsertThemeEventContract = buildEventContract({
	eventSignatures: {
		'heartwood.upsert-theme::v2021_02_11': {
			isGlobal: true,
			emitPermissions: {
				contractId: 'heartwood.skill-views',
				permissionIdsAny: ['can-manage-organization-themes'],
			},

			emitPayloadSchema: upsertThemeEmitTargetAndPayloadSchema,
			responsePayloadSchema: upsertThemeResponsePayloadSchema,
		},
	},
})
export default upsertThemeEventContract

export type UpsertThemeEventContract = typeof upsertThemeEventContract
