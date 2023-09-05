import {
	AbstractStore,
	UniversalStoreOptions,
	PrepareOptions,
	PrepareResults,
} from '@sprucelabs/data-stores'
import {
	buildSchema,
	dropFields,
	makeFieldsOptional,
	SchemaValues,
	SchemaFieldNames,
} from '@sprucelabs/schema'
import metaSchema from '#spruce/schemas/eightbitstories/v2023_09_05/meta.schema'

export default class MetaStore extends AbstractStore<
	FullSchema,
	CreateSchema,
	UpdateSchema,
	DatabaseSchema
> {
	public name = 'Meta'
	protected collectionName = 'meta'

	protected createSchema = createSchema
	protected updateSchema = updateSchema
	protected fullSchema = fullSchema
	protected databaseSchema = databaseSchema

	public static Store(options: MetaStoreOptions & UniversalStoreOptions) {
		return new this(options.db)
	}

	protected async willCreate(
		values: CreateMeta
	): Promise<Omit<DatabaseMeta, 'id'>> {
		return values
	}

	protected async willUpdate(values: UpdateMeta) {
		return values as Partial<DatabaseMeta>
	}

	protected async prepareRecord<
		IncludePrivateFields extends boolean,
		F extends SchemaFieldNames<FullSchema> = SchemaFieldNames<FullSchema>,
	>(
		record: DatabaseMeta,
		_options?: PrepareOptions<IncludePrivateFields, FullSchema, F>
	) {
		return record as PrepareResults<FullSchema, IncludePrivateFields>
	}
}

// The structure of the data you'll be returning from finds
const fullSchema = metaSchema

// The values you will accept when creating a record
const createSchema = buildSchema({
	id: 'createMeta',
	fields: {
		...dropFields(fullSchema.fields, ['id']),
	},
})

// The values you will accept when updating a record
const updateSchema = buildSchema({
	id: 'updateMeta',
	fields: {
		...makeFieldsOptional(dropFields(fullSchema.fields, ['id'])),
	},
})

// The values you will actually save to the databases (in this case, makes id required)
const databaseSchema = buildSchema({
	id: 'databaseMeta',
	fields: {
		...fullSchema.fields,
		id: {
			type: 'id',
			isRequired: true,
		},
	},
})

type FullSchema = typeof fullSchema
type CreateSchema = typeof createSchema
type UpdateSchema = typeof updateSchema
type DatabaseSchema = typeof databaseSchema

// type Meta = SchemaValues<FullSchema>
type CreateMeta = SchemaValues<CreateSchema>
type UpdateMeta = SchemaValues<UpdateSchema>
type DatabaseMeta = SchemaValues<DatabaseSchema>
// type QueryMeta = Partial<Meta>

type MetaStoreOptions = UniversalStoreOptions
