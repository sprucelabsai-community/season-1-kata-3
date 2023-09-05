import { buildSchema } from '@sprucelabs/schema'

const saveMetaResponsePayloadBuilder = buildSchema({
	id: 'saveMetaResponsePayload',
	fields: {
		meta: {
			type: 'schema',
			isRequired: true,
			options: {
				schema: {
					id: 'saveMeta',
					version: 'v2023_09_05',
				},
			},
		},
	},
})

export default saveMetaResponsePayloadBuilder
