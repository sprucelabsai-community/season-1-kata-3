import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import getMetaSchema_v2023_09_05 from '#spruce/schemas/eightbitstories/v2023_09_05/getMeta.schema'

const getMetaResponsePayloadSchema: SpruceSchemas.Eightbitstories.v2023_09_05.GetMetaResponsePayloadSchema  = {
	id: 'getMetaResponsePayload',
	version: 'v2023_09_05',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** . */
	            'meta': {
	                type: 'schema',
	                options: {schema: getMetaSchema_v2023_09_05,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getMetaResponsePayloadSchema)

export default getMetaResponsePayloadSchema
