export const typeDefs = /* GraphQL */ `type AggregateDog {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Dog {
  id: ID!
  name: String!
  breed: String!
  sex: Sex!
  dateOfBirth: DateTime!
  owner: User!
}

type DogConnection {
  pageInfo: PageInfo!
  edges: [DogEdge]!
  aggregate: AggregateDog!
}

input DogCreateInput {
  name: String!
  breed: String!
  sex: Sex!
  dateOfBirth: DateTime!
  owner: UserCreateOneWithoutDogsInput!
}

input DogCreateManyWithoutOwnerInput {
  create: [DogCreateWithoutOwnerInput!]
  connect: [DogWhereUniqueInput!]
}

input DogCreateWithoutOwnerInput {
  name: String!
  breed: String!
  sex: Sex!
  dateOfBirth: DateTime!
}

type DogEdge {
  node: Dog!
  cursor: String!
}

enum DogOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  breed_ASC
  breed_DESC
  sex_ASC
  sex_DESC
  dateOfBirth_ASC
  dateOfBirth_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type DogPreviousValues {
  id: ID!
  name: String!
  breed: String!
  sex: Sex!
  dateOfBirth: DateTime!
}

input DogScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  breed: String
  breed_not: String
  breed_in: [String!]
  breed_not_in: [String!]
  breed_lt: String
  breed_lte: String
  breed_gt: String
  breed_gte: String
  breed_contains: String
  breed_not_contains: String
  breed_starts_with: String
  breed_not_starts_with: String
  breed_ends_with: String
  breed_not_ends_with: String
  sex: Sex
  sex_not: Sex
  sex_in: [Sex!]
  sex_not_in: [Sex!]
  dateOfBirth: DateTime
  dateOfBirth_not: DateTime
  dateOfBirth_in: [DateTime!]
  dateOfBirth_not_in: [DateTime!]
  dateOfBirth_lt: DateTime
  dateOfBirth_lte: DateTime
  dateOfBirth_gt: DateTime
  dateOfBirth_gte: DateTime
  AND: [DogScalarWhereInput!]
  OR: [DogScalarWhereInput!]
  NOT: [DogScalarWhereInput!]
}

type DogSubscriptionPayload {
  mutation: MutationType!
  node: Dog
  updatedFields: [String!]
  previousValues: DogPreviousValues
}

input DogSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DogWhereInput
  AND: [DogSubscriptionWhereInput!]
  OR: [DogSubscriptionWhereInput!]
  NOT: [DogSubscriptionWhereInput!]
}

input DogUpdateInput {
  name: String
  breed: String
  sex: Sex
  dateOfBirth: DateTime
  owner: UserUpdateOneRequiredWithoutDogsInput
}

input DogUpdateManyDataInput {
  name: String
  breed: String
  sex: Sex
  dateOfBirth: DateTime
}

input DogUpdateManyMutationInput {
  name: String
  breed: String
  sex: Sex
  dateOfBirth: DateTime
}

input DogUpdateManyWithoutOwnerInput {
  create: [DogCreateWithoutOwnerInput!]
  delete: [DogWhereUniqueInput!]
  connect: [DogWhereUniqueInput!]
  disconnect: [DogWhereUniqueInput!]
  update: [DogUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [DogUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [DogScalarWhereInput!]
  updateMany: [DogUpdateManyWithWhereNestedInput!]
}

input DogUpdateManyWithWhereNestedInput {
  where: DogScalarWhereInput!
  data: DogUpdateManyDataInput!
}

input DogUpdateWithoutOwnerDataInput {
  name: String
  breed: String
  sex: Sex
  dateOfBirth: DateTime
}

input DogUpdateWithWhereUniqueWithoutOwnerInput {
  where: DogWhereUniqueInput!
  data: DogUpdateWithoutOwnerDataInput!
}

input DogUpsertWithWhereUniqueWithoutOwnerInput {
  where: DogWhereUniqueInput!
  update: DogUpdateWithoutOwnerDataInput!
  create: DogCreateWithoutOwnerInput!
}

input DogWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  breed: String
  breed_not: String
  breed_in: [String!]
  breed_not_in: [String!]
  breed_lt: String
  breed_lte: String
  breed_gt: String
  breed_gte: String
  breed_contains: String
  breed_not_contains: String
  breed_starts_with: String
  breed_not_starts_with: String
  breed_ends_with: String
  breed_not_ends_with: String
  sex: Sex
  sex_not: Sex
  sex_in: [Sex!]
  sex_not_in: [Sex!]
  dateOfBirth: DateTime
  dateOfBirth_not: DateTime
  dateOfBirth_in: [DateTime!]
  dateOfBirth_not_in: [DateTime!]
  dateOfBirth_lt: DateTime
  dateOfBirth_lte: DateTime
  dateOfBirth_gt: DateTime
  dateOfBirth_gte: DateTime
  owner: UserWhereInput
  AND: [DogWhereInput!]
  OR: [DogWhereInput!]
  NOT: [DogWhereInput!]
}

input DogWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createDog(data: DogCreateInput!): Dog!
  updateDog(data: DogUpdateInput!, where: DogWhereUniqueInput!): Dog
  updateManyDogs(data: DogUpdateManyMutationInput!, where: DogWhereInput): BatchPayload!
  upsertDog(where: DogWhereUniqueInput!, create: DogCreateInput!, update: DogUpdateInput!): Dog!
  deleteDog(where: DogWhereUniqueInput!): Dog
  deleteManyDogs(where: DogWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  dog(where: DogWhereUniqueInput!): Dog
  dogs(where: DogWhereInput, orderBy: DogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Dog]!
  dogsConnection(where: DogWhereInput, orderBy: DogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DogConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

enum Sex {
  Male
  Female
}

type Subscription {
  dog(where: DogSubscriptionWhereInput): DogSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  dogs(where: DogWhereInput, orderBy: DogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Dog!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  dogs: DogCreateManyWithoutOwnerInput
}

input UserCreateOneWithoutDogsInput {
  create: UserCreateWithoutDogsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutDogsInput {
  email: String!
  password: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
  dogs: DogUpdateManyWithoutOwnerInput
}

input UserUpdateManyMutationInput {
  email: String
  password: String
}

input UserUpdateOneRequiredWithoutDogsInput {
  create: UserCreateWithoutDogsInput
  update: UserUpdateWithoutDogsDataInput
  upsert: UserUpsertWithoutDogsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutDogsDataInput {
  email: String
  password: String
}

input UserUpsertWithoutDogsInput {
  update: UserUpdateWithoutDogsDataInput!
  create: UserCreateWithoutDogsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  dogs_every: DogWhereInput
  dogs_some: DogWhereInput
  dogs_none: DogWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`