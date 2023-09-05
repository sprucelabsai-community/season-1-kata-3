import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const saveMetaSchema: SpruceSchemas.Eightbitstories.v2023_09_05.SaveMetaSchema  = {
	id: 'saveMeta',
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

SchemaRegistry.getInstance().trackSchema(saveMetaSchema)

export default saveMetaSchema
