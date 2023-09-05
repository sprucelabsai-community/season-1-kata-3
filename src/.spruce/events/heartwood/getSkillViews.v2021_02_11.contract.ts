import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import getSkillViewsEmitTargetAndPayloadSchema from '#spruce/schemas/heartwood/v2021_02_11/getSkillViewsEmitTargetAndPayload.schema'
import getSkillViewsResponsePayloadSchema from '#spruce/schemas/heartwood/v2021_02_11/getSkillViewsResponsePayload.schema'

const getSkillViewsEventContract = buildEventContract({
	eventSignatures: {
		'heartwood.get-skill-views::v2021_02_11': {
			isGlobal: true,
			emitPermissions: {
				contractId: 'heartwood.skill-views',
				permissionIdsAny: ['can-get-skill-views'],
			},

			emitPayloadSchema: getSkillViewsEmitTargetAndPayloadSchema,
			responsePayloadSchema: getSkillViewsResponsePayloadSchema,
		},
	},
})
export default getSkillViewsEventContract

export type GetSkillViewsEventContract = typeof getSkillViewsEventContract
