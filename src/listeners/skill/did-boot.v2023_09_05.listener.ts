import {
	SpruceEvent,
	SpruceEventResponse,
} from '@sprucelabs/spruce-event-utils'
import MetaTracker from '../../meta/MetaTracker'

export default async (event: SpruceEvent): SpruceEventResponse => {
	const { stores, skill } = event
	const tracker = await MetaTracker.Tracker(stores)

	skill.updateContext('metas', tracker)
}
