import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import saveMetaEmitPayloadSchema_v2023_09_05 from '#spruce/schemas/eightbitstories/v2023_09_05/saveMetaEmitPayload.schema'

const saveMetaEmitTargetAndPayloadSchema: SpruceSchemas.Eightbitstories.v2023_09_05.SaveMetaEmitTargetAndPayloadSchema  = {
	id: 'saveMetaEmitTargetAndPayload',
	version: 'v2023_09_05',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** Source. */
	            'source': {
	                label: 'Source',
	                type: 'schema',
	                options: {schema: eventSourceSchema_v2021_09_13,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: saveMetaEmitPayloadSchema_v2023_09_05,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(saveMetaEmitTargetAndPayloadSchema)

export default saveMetaEmitTargetAndPayloadSchema
