import {
	EventSignature,
	buildPermissionReference,
} from '@sprucelabs/mercury-types'
import '#spruce/permissions/permissions.types'
import '@sprucelabs/mercury-core-events'

type Options = Omit<
	EventSignature,
	| 'responsePayloadSchema'
	| 'emitPayloadSchema'
	| 'listenPermissionContract'
	| 'emitPermissionContract'
>

const eventOptions: Options = {
	isGlobal: true,
	emitPermissions: buildPermissionReference(
		'eightbitstories.eight-bit-stories',
		['can-save-family-meta']
	),
}

export default eventOptions
