import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const getMetaSchema: SpruceSchemas.Eightbitstories.v2023_09_05.GetMetaSchema  = {
	id: 'getMeta',
	version: 'v2023_09_05',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** Family Name. */
	            'name': {
	                label: 'Family Name',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** Values. */
	            'values': {
	                label: 'Values',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getMetaSchema)

export default getMetaSchema
