import { buildSchema } from '@sprucelabs/schema'

export default buildSchema({
	id: 'meta',
	name: 'Meta',
	fields: {
		id: {
			type: 'id',
			isRequired: true,
			isPrivate: true,
		},
		name: {
			type: 'text',
			isRequired: true,
			label: 'Family Name',
		},
		values: {
			type: 'text',
			isRequired: true,
			label: 'Values',
		},
		target: {
			type: 'schema',
			isRequired: true,
			isPrivate: true,
			options: {
				schema: buildSchema({
					id: 'metaTarget',
					fields: {
						personId: {
							type: 'id',
							isRequired: true,
						},
					},
				}),
			},
		},
	},
})
