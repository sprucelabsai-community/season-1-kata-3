import { SpruceSchemas } from '@sprucelabs/spruce-core-schemas'
import MetaTracker from './meta/MetaTracker'

export type Meta = SpruceSchemas.Eightbitstories.v2023_09_05.Meta
export type GetMeta = SpruceSchemas.Eightbitstories.v2023_09_05.GetMeta
export type SaveMeta = SpruceSchemas.Eightbitstories.v2023_09_05.SaveMeta

declare module '@sprucelabs/spruce-skill-utils/build/types/skill.types' {
	interface SkillContext {
		metas: MetaTracker
	}
}
