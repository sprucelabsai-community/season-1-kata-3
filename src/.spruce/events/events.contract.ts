import { coreEventContracts } from '@sprucelabs/mercury-core-events'
import eightbitstoriesGetMetaEventContract_v2023_09_05, {
	GetMetaEventContract as EightbitstoriesGetMetaEventContract_v2023_09_05,
} from '#spruce/events/eightbitstories/getMeta.v2023_09_05.contract'
import eightbitstoriesSaveMetaEventContract_v2023_09_05, {
	SaveMetaEventContract as EightbitstoriesSaveMetaEventContract_v2023_09_05,
} from '#spruce/events/eightbitstories/saveMeta.v2023_09_05.contract'
import heartwoodDidRegisterSkillViewsEventContract_v2021_02_11, {
	DidRegisterSkillViewsEventContract as HeartwoodDidRegisterSkillViewsEventContract_v2021_02_11,
} from '#spruce/events/heartwood/didRegisterSkillViews.v2021_02_11.contract'
import heartwoodGenerateUrlEventContract_v2021_02_11, {
	GenerateUrlEventContract as HeartwoodGenerateUrlEventContract_v2021_02_11,
} from '#spruce/events/heartwood/generateUrl.v2021_02_11.contract'
import heartwoodGetActiveThemeEventContract_v2021_02_11, {
	GetActiveThemeEventContract as HeartwoodGetActiveThemeEventContract_v2021_02_11,
} from '#spruce/events/heartwood/getActiveTheme.v2021_02_11.contract'
import heartwoodGetSkillViewsEventContract_v2021_02_11, {
	GetSkillViewsEventContract as HeartwoodGetSkillViewsEventContract_v2021_02_11,
} from '#spruce/events/heartwood/getSkillViews.v2021_02_11.contract'
import heartwoodListViewsEventContract_v2021_02_11, {
	ListViewsEventContract as HeartwoodListViewsEventContract_v2021_02_11,
} from '#spruce/events/heartwood/listViews.v2021_02_11.contract'
import heartwoodRegisterDashboardCardsEventContract_v2021_02_11, {
	RegisterDashboardCardsEventContract as HeartwoodRegisterDashboardCardsEventContract_v2021_02_11,
} from '#spruce/events/heartwood/registerDashboardCards.v2021_02_11.contract'
import heartwoodRegisterSkillViewsEventContract_v2021_02_11, {
	RegisterSkillViewsEventContract as HeartwoodRegisterSkillViewsEventContract_v2021_02_11,
} from '#spruce/events/heartwood/registerSkillViews.v2021_02_11.contract'
import heartwoodUpsertThemeEventContract_v2021_02_11, {
	UpsertThemeEventContract as HeartwoodUpsertThemeEventContract_v2021_02_11,
} from '#spruce/events/heartwood/upsertTheme.v2021_02_11.contract'

export default [
	heartwoodDidRegisterSkillViewsEventContract_v2021_02_11,
	heartwoodGenerateUrlEventContract_v2021_02_11,
	heartwoodGetActiveThemeEventContract_v2021_02_11,
	eightbitstoriesGetMetaEventContract_v2023_09_05,
	heartwoodGetSkillViewsEventContract_v2021_02_11,
	heartwoodListViewsEventContract_v2021_02_11,
	heartwoodRegisterDashboardCardsEventContract_v2021_02_11,
	heartwoodRegisterSkillViewsEventContract_v2021_02_11,
	eightbitstoriesSaveMetaEventContract_v2023_09_05,
	heartwoodUpsertThemeEventContract_v2021_02_11,
	...coreEventContracts,
]

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface SkillEventSignatures {
		'heartwood.did-register-skill-views::v2021_02_11': HeartwoodDidRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.did-register-skill-views::v2021_02_11']

		'heartwood.generate-url::v2021_02_11': HeartwoodGenerateUrlEventContract_v2021_02_11['eventSignatures']['heartwood.generate-url::v2021_02_11']

		'heartwood.get-active-theme::v2021_02_11': HeartwoodGetActiveThemeEventContract_v2021_02_11['eventSignatures']['heartwood.get-active-theme::v2021_02_11']

		'eightbitstories.get-meta::v2023_09_05': EightbitstoriesGetMetaEventContract_v2023_09_05['eventSignatures']['eightbitstories.get-meta::v2023_09_05']

		'heartwood.get-skill-views::v2021_02_11': HeartwoodGetSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.get-skill-views::v2021_02_11']

		'heartwood.list-views::v2021_02_11': HeartwoodListViewsEventContract_v2021_02_11['eventSignatures']['heartwood.list-views::v2021_02_11']

		'heartwood.register-dashboard-cards::v2021_02_11': HeartwoodRegisterDashboardCardsEventContract_v2021_02_11['eventSignatures']['heartwood.register-dashboard-cards::v2021_02_11']

		'heartwood.register-skill-views::v2021_02_11': HeartwoodRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.register-skill-views::v2021_02_11']

		'eightbitstories.save-meta::v2023_09_05': EightbitstoriesSaveMetaEventContract_v2023_09_05['eventSignatures']['eightbitstories.save-meta::v2023_09_05']

		'heartwood.upsert-theme::v2021_02_11': HeartwoodUpsertThemeEventContract_v2021_02_11['eventSignatures']['heartwood.upsert-theme::v2021_02_11']
	}
}
