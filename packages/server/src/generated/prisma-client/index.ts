// Code generated by Prisma (prisma@1.25.4). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  dog: (where?: DogWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  dog: (where: DogWhereUniqueInput) => DogPromise;
  dogs: (
    args?: {
      where?: DogWhereInput;
      orderBy?: DogOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Dog>;
  dogsConnection: (
    args?: {
      where?: DogWhereInput;
      orderBy?: DogOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => DogConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createDog: (data: DogCreateInput) => DogPromise;
  updateDog: (
    args: { data: DogUpdateInput; where: DogWhereUniqueInput }
  ) => DogPromise;
  updateManyDogs: (
    args: { data: DogUpdateManyMutationInput; where?: DogWhereInput }
  ) => BatchPayloadPromise;
  upsertDog: (
    args: {
      where: DogWhereUniqueInput;
      create: DogCreateInput;
      update: DogUpdateInput;
    }
  ) => DogPromise;
  deleteDog: (where: DogWhereUniqueInput) => DogPromise;
  deleteManyDogs: (where?: DogWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  dog: (
    where?: DogSubscriptionWhereInput
  ) => DogSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type DogOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "breed_ASC"
  | "breed_DESC"
  | "sex_ASC"
  | "sex_DESC"
  | "dateOfBirth_ASC"
  | "dateOfBirth_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type Sex = "Male" | "Female";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface DogUpdateInput {
  name?: String;
  breed?: String;
  sex?: Sex;
  dateOfBirth?: DateTimeInput;
  owner?: UserUpdateOneRequiredWithoutDogsInput;
}

export type DogWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface DogUpdateManyWithoutOwnerInput {
  create?: DogCreateWithoutOwnerInput[] | DogCreateWithoutOwnerInput;
  delete?: DogWhereUniqueInput[] | DogWhereUniqueInput;
  connect?: DogWhereUniqueInput[] | DogWhereUniqueInput;
  disconnect?: DogWhereUniqueInput[] | DogWhereUniqueInput;
  update?:
    | DogUpdateWithWhereUniqueWithoutOwnerInput[]
    | DogUpdateWithWhereUniqueWithoutOwnerInput;
  upsert?:
    | DogUpsertWithWhereUniqueWithoutOwnerInput[]
    | DogUpsertWithWhereUniqueWithoutOwnerInput;
  deleteMany?: DogScalarWhereInput[] | DogScalarWhereInput;
  updateMany?:
    | DogUpdateManyWithWhereNestedInput[]
    | DogUpdateManyWithWhereNestedInput;
}

export interface UserCreateInput {
  email: String;
  password: String;
  dogs?: DogCreateManyWithoutOwnerInput;
}

export interface UserUpdateInput {
  email?: String;
  password?: String;
  dogs?: DogUpdateManyWithoutOwnerInput;
}

export interface UserUpsertWithoutDogsInput {
  update: UserUpdateWithoutDogsDataInput;
  create: UserCreateWithoutDogsInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface UserUpdateManyMutationInput {
  email?: String;
  password?: String;
}

export interface DogCreateInput {
  name: String;
  breed: String;
  sex: Sex;
  dateOfBirth: DateTimeInput;
  owner: UserCreateOneWithoutDogsInput;
}

export interface DogUpdateManyWithWhereNestedInput {
  where: DogScalarWhereInput;
  data: DogUpdateManyDataInput;
}

export interface UserCreateOneWithoutDogsInput {
  create?: UserCreateWithoutDogsInput;
  connect?: UserWhereUniqueInput;
}

export interface DogUpsertWithWhereUniqueWithoutOwnerInput {
  where: DogWhereUniqueInput;
  update: DogUpdateWithoutOwnerDataInput;
  create: DogCreateWithoutOwnerInput;
}

export interface UserCreateWithoutDogsInput {
  email: String;
  password: String;
}

export interface DogUpdateWithoutOwnerDataInput {
  name?: String;
  breed?: String;
  sex?: Sex;
  dateOfBirth?: DateTimeInput;
}

export interface DogCreateWithoutOwnerInput {
  name: String;
  breed: String;
  sex: Sex;
  dateOfBirth: DateTimeInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  dogs_every?: DogWhereInput;
  dogs_some?: DogWhereInput;
  dogs_none?: DogWhereInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface UserUpdateOneRequiredWithoutDogsInput {
  create?: UserCreateWithoutDogsInput;
  update?: UserUpdateWithoutDogsDataInput;
  upsert?: UserUpsertWithoutDogsInput;
  connect?: UserWhereUniqueInput;
}

export interface DogUpdateManyDataInput {
  name?: String;
  breed?: String;
  sex?: Sex;
  dateOfBirth?: DateTimeInput;
}

export interface DogCreateManyWithoutOwnerInput {
  create?: DogCreateWithoutOwnerInput[] | DogCreateWithoutOwnerInput;
  connect?: DogWhereUniqueInput[] | DogWhereUniqueInput;
}

export interface DogUpdateManyMutationInput {
  name?: String;
  breed?: String;
  sex?: Sex;
  dateOfBirth?: DateTimeInput;
}

export interface DogWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  breed?: String;
  breed_not?: String;
  breed_in?: String[] | String;
  breed_not_in?: String[] | String;
  breed_lt?: String;
  breed_lte?: String;
  breed_gt?: String;
  breed_gte?: String;
  breed_contains?: String;
  breed_not_contains?: String;
  breed_starts_with?: String;
  breed_not_starts_with?: String;
  breed_ends_with?: String;
  breed_not_ends_with?: String;
  sex?: Sex;
  sex_not?: Sex;
  sex_in?: Sex[] | Sex;
  sex_not_in?: Sex[] | Sex;
  dateOfBirth?: DateTimeInput;
  dateOfBirth_not?: DateTimeInput;
  dateOfBirth_in?: DateTimeInput[] | DateTimeInput;
  dateOfBirth_not_in?: DateTimeInput[] | DateTimeInput;
  dateOfBirth_lt?: DateTimeInput;
  dateOfBirth_lte?: DateTimeInput;
  dateOfBirth_gt?: DateTimeInput;
  dateOfBirth_gte?: DateTimeInput;
  owner?: UserWhereInput;
  AND?: DogWhereInput[] | DogWhereInput;
  OR?: DogWhereInput[] | DogWhereInput;
  NOT?: DogWhereInput[] | DogWhereInput;
}

export interface UserUpdateWithoutDogsDataInput {
  email?: String;
  password?: String;
}

export interface DogScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  breed?: String;
  breed_not?: String;
  breed_in?: String[] | String;
  breed_not_in?: String[] | String;
  breed_lt?: String;
  breed_lte?: String;
  breed_gt?: String;
  breed_gte?: String;
  breed_contains?: String;
  breed_not_contains?: String;
  breed_starts_with?: String;
  breed_not_starts_with?: String;
  breed_ends_with?: String;
  breed_not_ends_with?: String;
  sex?: Sex;
  sex_not?: Sex;
  sex_in?: Sex[] | Sex;
  sex_not_in?: Sex[] | Sex;
  dateOfBirth?: DateTimeInput;
  dateOfBirth_not?: DateTimeInput;
  dateOfBirth_in?: DateTimeInput[] | DateTimeInput;
  dateOfBirth_not_in?: DateTimeInput[] | DateTimeInput;
  dateOfBirth_lt?: DateTimeInput;
  dateOfBirth_lte?: DateTimeInput;
  dateOfBirth_gt?: DateTimeInput;
  dateOfBirth_gte?: DateTimeInput;
  AND?: DogScalarWhereInput[] | DogScalarWhereInput;
  OR?: DogScalarWhereInput[] | DogScalarWhereInput;
  NOT?: DogScalarWhereInput[] | DogScalarWhereInput;
}

export interface DogSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: DogWhereInput;
  AND?: DogSubscriptionWhereInput[] | DogSubscriptionWhereInput;
  OR?: DogSubscriptionWhereInput[] | DogSubscriptionWhereInput;
  NOT?: DogSubscriptionWhereInput[] | DogSubscriptionWhereInput;
}

export interface DogUpdateWithWhereUniqueWithoutOwnerInput {
  where: DogWhereUniqueInput;
  data: DogUpdateWithoutOwnerDataInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  email: String;
  password: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

export interface AggregateDog {
  count: Int;
}

export interface AggregateDogPromise
  extends Promise<AggregateDog>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateDogSubscription
  extends Promise<AsyncIterator<AggregateDog>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Dog {
  id: ID_Output;
  name: String;
  breed: String;
  sex: Sex;
  dateOfBirth: DateTimeOutput;
}

export interface DogPromise extends Promise<Dog>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  breed: () => Promise<String>;
  sex: () => Promise<Sex>;
  dateOfBirth: () => Promise<DateTimeOutput>;
  owner: <T = UserPromise>() => T;
}

export interface DogSubscription
  extends Promise<AsyncIterator<Dog>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  breed: () => Promise<AsyncIterator<String>>;
  sex: () => Promise<AsyncIterator<Sex>>;
  dateOfBirth: () => Promise<AsyncIterator<DateTimeOutput>>;
  owner: <T = UserSubscription>() => T;
}

export interface DogEdge {
  node: Dog;
  cursor: String;
}

export interface DogEdgePromise extends Promise<DogEdge>, Fragmentable {
  node: <T = DogPromise>() => T;
  cursor: () => Promise<String>;
}

export interface DogEdgeSubscription
  extends Promise<AsyncIterator<DogEdge>>,
    Fragmentable {
  node: <T = DogSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface User {
  id: ID_Output;
  email: String;
  password: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  dogs: <T = FragmentableArray<Dog>>(
    args?: {
      where?: DogWhereInput;
      orderBy?: DogOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  dogs: <T = Promise<AsyncIterator<DogSubscription>>>(
    args?: {
      where?: DogWhereInput;
      orderBy?: DogOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface DogSubscriptionPayload {
  mutation: MutationType;
  node: Dog;
  updatedFields: String[];
  previousValues: DogPreviousValues;
}

export interface DogSubscriptionPayloadPromise
  extends Promise<DogSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = DogPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = DogPreviousValuesPromise>() => T;
}

export interface DogSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<DogSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = DogSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = DogPreviousValuesSubscription>() => T;
}

export interface DogConnection {
  pageInfo: PageInfo;
  edges: DogEdge[];
}

export interface DogConnectionPromise
  extends Promise<DogConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<DogEdge>>() => T;
  aggregate: <T = AggregateDogPromise>() => T;
}

export interface DogConnectionSubscription
  extends Promise<AsyncIterator<DogConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<DogEdgeSubscription>>>() => T;
  aggregate: <T = AggregateDogSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface DogPreviousValues {
  id: ID_Output;
  name: String;
  breed: String;
  sex: Sex;
  dateOfBirth: DateTimeOutput;
}

export interface DogPreviousValuesPromise
  extends Promise<DogPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  breed: () => Promise<String>;
  sex: () => Promise<Sex>;
  dateOfBirth: () => Promise<DateTimeOutput>;
}

export interface DogPreviousValuesSubscription
  extends Promise<AsyncIterator<DogPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  breed: () => Promise<AsyncIterator<String>>;
  sex: () => Promise<AsyncIterator<Sex>>;
  dateOfBirth: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Dog",
    embedded: false
  },
  {
    name: "Sex",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
export const prisma = new Prisma();
