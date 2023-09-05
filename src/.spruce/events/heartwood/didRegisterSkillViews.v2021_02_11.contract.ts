import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import didRegisterSkillViewsEmitTargetAndPayloadSchema from '#spruce/schemas/heartwood/v2021_02_11/didRegisterSkillViewsEmitTargetAndPayload.schema'

const didRegisterSkillViewsEventContract = buildEventContract({
	eventSignatures: {
		'heartwood.did-register-skill-views::v2021_02_11': {
			isGlobal: true,

			listenPermissions: {
				contractId: 'heartwood.skill-views',
				permissionIdsAny: ['can-listen-to-did-register-skill-views'],
			},
			emitPayloadSchema: didRegisterSkillViewsEmitTargetAndPayloadSchema,
		},
	},
})
export default didRegisterSkillViewsEventContract

export type DidRegisterSkillViewsEventContract =
	typeof didRegisterSkillViewsEventContract
