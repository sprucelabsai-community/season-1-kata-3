import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import getActiveThemeEmitTargetAndPayloadSchema from '#spruce/schemas/heartwood/v2021_02_11/getActiveThemeEmitTargetAndPayload.schema'
import getActiveThemeResponsePayloadSchema from '#spruce/schemas/heartwood/v2021_02_11/getActiveThemeResponsePayload.schema'

const getActiveThemeEventContract = buildEventContract({
	eventSignatures: {
		'heartwood.get-active-theme::v2021_02_11': {
			isGlobal: true,
			emitPermissions: {
				contractId: 'heartwood.skill-views',
				permissionIdsAny: ['can-get-active-theme'],
			},

			emitPayloadSchema: getActiveThemeEmitTargetAndPayloadSchema,
			responsePayloadSchema: getActiveThemeResponsePayloadSchema,
		},
	},
})
export default getActiveThemeEventContract

export type GetActiveThemeEventContract = typeof getActiveThemeEventContract
