import {
	SpruceEvent,
	SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'

export default async (
	event: SpruceEvent
): SpruceEventResponse<ResponsePayload> => {
	const { source, metas } = event

	const meta = await metas.getForPerson(source.personId!)

	return {
		meta,
	}
}

type ResponsePayload =
	SpruceSchemas.Eightbitstories.v2023_09_05.GetMetaResponsePayload
