import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import registerDashboardCardsResponsePayloadSchema from '#spruce/schemas/heartwood/v2021_02_11/registerDashboardCardsResponsePayload.schema'

const registerDashboardCardsEventContract = buildEventContract({
	eventSignatures: {
		'heartwood.register-dashboard-cards::v2021_02_11': {
			isGlobal: true,
			emitPermissions: {
				contractId: 'heartwood.skill-views',
				permissionIdsAny: ['can-get-skill-views'],
			},
			listenPermissions: {
				contractId: 'heartwood.skill-views',
				permissionIdsAny: ['can-register-skill-views'],
			},

			responsePayloadSchema: registerDashboardCardsResponsePayloadSchema,
		},
	},
})
export default registerDashboardCardsEventContract

export type RegisterDashboardCardsEventContract =
	typeof registerDashboardCardsEventContract
