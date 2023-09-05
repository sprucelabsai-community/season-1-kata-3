import { buildSchema, dropPrivateFields } from '@sprucelabs/schema'
import metaBuilder from '../../../../schemas/v2023_09_05/meta.builder'

const getMetaResponsePayloadBuilder = buildSchema({
	id: 'getMetaResponsePayload',
	fields: {
		meta: {
			type: 'schema',
			options: {
				schema: buildSchema({
					id: 'getMeta',
					fields: {
						...dropPrivateFields(metaBuilder.fields),
					},
				}),
			},
		},
	},
})

export default getMetaResponsePayloadBuilder
