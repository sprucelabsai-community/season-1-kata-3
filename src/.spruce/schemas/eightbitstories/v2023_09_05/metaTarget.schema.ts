import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const metaTargetSchema: SpruceSchemas.Eightbitstories.v2023_09_05.MetaTargetSchema  = {
	id: 'metaTarget',
	version: 'v2023_09_05',
	namespace: 'Eightbitstories',
	name: '',
	    fields: {
	            /** . */
	            'personId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(metaTargetSchema)

export default metaTargetSchema
