import MetaStore from '../../meta/Meta.store'

declare module '@sprucelabs/data-stores/build/types/stores.types' {
	interface StoreMap {
                meta: MetaStore
	}

	interface StoreOptionsMap {
                meta: Omit<Parameters<typeof MetaStore['Store']>[0], keyof UniversalStoreOptions>   
        }
}