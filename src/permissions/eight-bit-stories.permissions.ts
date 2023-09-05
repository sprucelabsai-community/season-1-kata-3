import { buildPermissionContract } from '@sprucelabs/mercury-types'

const eightBitStoriesPermissions = buildPermissionContract({
	id: 'eight-bit-stories',
	name: 'Eight bit stories',
	description: '',
	requireAllPermissions: false,
	permissions: [
		{
			id: 'can-load-family-meta',
			name: 'Can load family meta for themselves.',
			defaults: {
				loggedIn: {
					default: true,
				},
			},
			requireAllStatuses: false,
		},
		{
			id: 'can-save-family-meta',
			name: 'Can save family meta for themselves.',
			defaults: {
				loggedIn: {
					default: true,
				},
			},
			requireAllStatuses: false,
		},
	],
})

export default eightBitStoriesPermissions
