import { SkillEventContract } from '@sprucelabs/mercury-types'
import {
	SpruceEvent,
	SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
	event: SpruceEvent<SkillEventContract, EmitPayload>
): SpruceEventResponse<ResponsePayload> => {
	const { payload, source, metas } = event
	const { meta } = payload
	const { personId } = source

	await metas.saveForPerson(personId!, meta)

	return {
		meta,
	}
}

type EmitPayload =
	SpruceSchemas.Eightbitstories.v2023_09_05.SaveMetaEmitTargetAndPayload

type ResponsePayload =
	SpruceSchemas.Eightbitstories.v2023_09_05.SaveMetaResponsePayload
