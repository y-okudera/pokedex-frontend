import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
import { graphql, type GraphQLResponseResolver, type RequestHandlerOptions } from 'msw'
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSON: { input: unknown; output: unknown; }
  JSONObject: { input: any; output: any; }
  Upload: { input: unknown; output: unknown; }
};

export type Ability = {
  __typename?: 'Ability';
  ability?: Maybe<BaseName>;
  is_hidden?: Maybe<Scalars['Boolean']['output']>;
  slot?: Maybe<Scalars['Int']['output']>;
};

export type BaseList = {
  __typename?: 'BaseList';
  count?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  next?: Maybe<Scalars['String']['output']>;
  previous?: Maybe<Scalars['String']['output']>;
  results?: Maybe<Array<Maybe<BaseName>>>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type BaseName = {
  __typename?: 'BaseName';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type BaseResponse = {
  __typename?: 'BaseResponse';
  message?: Maybe<Scalars['String']['output']>;
  params?: Maybe<Scalars['JSON']['output']>;
  response?: Maybe<Scalars['JSON']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type GameIndex = {
  __typename?: 'GameIndex';
  game_index?: Maybe<Scalars['Int']['output']>;
  version?: Maybe<BaseName>;
};

export type HeldItem = {
  __typename?: 'HeldItem';
  item?: Maybe<BaseName>;
  version_details?: Maybe<Array<Maybe<VersionDetail>>>;
};

export type Move = {
  __typename?: 'Move';
  move?: Maybe<BaseName>;
  version_group_details?: Maybe<Array<Maybe<VersionGroupDetail>>>;
};

export type Pokemon = {
  __typename?: 'Pokemon';
  abilities?: Maybe<Array<Maybe<Ability>>>;
  base_experience?: Maybe<Scalars['Int']['output']>;
  forms?: Maybe<Array<Maybe<BaseName>>>;
  game_indices?: Maybe<Array<Maybe<GameIndex>>>;
  height?: Maybe<Scalars['Int']['output']>;
  held_items?: Maybe<Array<Maybe<HeldItem>>>;
  id?: Maybe<Scalars['Int']['output']>;
  is_default?: Maybe<Scalars['Boolean']['output']>;
  location_area_encounters?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  moves?: Maybe<Array<Maybe<Move>>>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  species?: Maybe<BaseName>;
  sprites?: Maybe<Sprite>;
  stats?: Maybe<Array<Maybe<Stat>>>;
  status?: Maybe<Scalars['Boolean']['output']>;
  types?: Maybe<Array<Maybe<Type>>>;
  weight?: Maybe<Scalars['Int']['output']>;
};

export type PokemonItem = {
  __typename?: 'PokemonItem';
  artwork?: Maybe<Scalars['String']['output']>;
  dreamworld?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type PokemonList = {
  __typename?: 'PokemonList';
  count?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  next?: Maybe<Scalars['String']['output']>;
  nextOffset?: Maybe<Scalars['Int']['output']>;
  params?: Maybe<Scalars['JSON']['output']>;
  prevOffset?: Maybe<Scalars['Int']['output']>;
  previous?: Maybe<Scalars['String']['output']>;
  results?: Maybe<Array<Maybe<PokemonItem>>>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type Query = {
  __typename?: 'Query';
  abilities?: Maybe<BaseList>;
  ability?: Maybe<BaseResponse>;
  berries?: Maybe<BaseList>;
  berry?: Maybe<BaseResponse>;
  eggGroup?: Maybe<BaseResponse>;
  eggGroups?: Maybe<BaseList>;
  encounterMethod?: Maybe<BaseResponse>;
  encounterMethods?: Maybe<BaseList>;
  evolutionChain?: Maybe<BaseResponse>;
  evolutionChains?: Maybe<BaseList>;
  evolutionTrigger?: Maybe<BaseResponse>;
  evolutionTriggers?: Maybe<BaseList>;
  gender?: Maybe<BaseResponse>;
  genders?: Maybe<BaseList>;
  growthRate?: Maybe<BaseResponse>;
  growthRates?: Maybe<BaseList>;
  location?: Maybe<BaseResponse>;
  locations?: Maybe<BaseList>;
  move?: Maybe<BaseResponse>;
  moves?: Maybe<BaseList>;
  nature?: Maybe<BaseResponse>;
  natures?: Maybe<BaseList>;
  pokemon?: Maybe<Pokemon>;
  pokemons?: Maybe<PokemonList>;
  region?: Maybe<BaseResponse>;
  regions?: Maybe<BaseList>;
  species?: Maybe<BaseList>;
  types?: Maybe<BaseList>;
};


export type QueryAbilityArgs = {
  ability: Scalars['String']['input'];
};


export type QueryBerryArgs = {
  berry: Scalars['String']['input'];
};


export type QueryEggGroupArgs = {
  eggGroup: Scalars['String']['input'];
};


export type QueryEncounterMethodArgs = {
  encounterMethod: Scalars['String']['input'];
};


export type QueryEvolutionChainArgs = {
  id: Scalars['String']['input'];
};


export type QueryEvolutionTriggerArgs = {
  name: Scalars['String']['input'];
};


export type QueryGenderArgs = {
  gender: Scalars['String']['input'];
};


export type QueryGrowthRateArgs = {
  growthRate: Scalars['String']['input'];
};


export type QueryLocationArgs = {
  location: Scalars['String']['input'];
};


export type QueryMoveArgs = {
  move: Scalars['String']['input'];
};


export type QueryNatureArgs = {
  nature: Scalars['String']['input'];
};


export type QueryPokemonArgs = {
  name: Scalars['String']['input'];
};


export type QueryPokemonsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRegionArgs = {
  region: Scalars['String']['input'];
};

export type Sprite = {
  __typename?: 'Sprite';
  back_default?: Maybe<Scalars['String']['output']>;
  back_female?: Maybe<Scalars['String']['output']>;
  back_shiny?: Maybe<Scalars['String']['output']>;
  back_shiny_female?: Maybe<Scalars['String']['output']>;
  front_default?: Maybe<Scalars['String']['output']>;
  front_female?: Maybe<Scalars['String']['output']>;
  front_shiny?: Maybe<Scalars['String']['output']>;
  front_shiny_female?: Maybe<Scalars['String']['output']>;
};

export type Stat = {
  __typename?: 'Stat';
  base_stat?: Maybe<Scalars['Int']['output']>;
  effort?: Maybe<Scalars['Int']['output']>;
  stat?: Maybe<BaseName>;
};

export type Type = {
  __typename?: 'Type';
  slot?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<BaseName>;
};

export type VersionDetail = {
  __typename?: 'VersionDetail';
  rarity?: Maybe<Scalars['Int']['output']>;
  version?: Maybe<BaseName>;
};

export type VersionGroupDetail = {
  __typename?: 'VersionGroupDetail';
  level_learned_at?: Maybe<Scalars['Int']['output']>;
  move_learn_method?: Maybe<BaseName>;
  version_group?: Maybe<BaseName>;
};

export type GetPokemonQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type GetPokemonQuery = { __typename?: 'Query', pokemon?: { __typename?: 'Pokemon', id?: number | null, name?: string | null, height?: number | null, weight?: number | null, abilities?: Array<{ __typename?: 'Ability', ability?: { __typename?: 'BaseName', name?: string | null } | null } | null> | null, types?: Array<{ __typename?: 'Type', type?: { __typename?: 'BaseName', name?: string | null } | null } | null> | null, stats?: Array<{ __typename?: 'Stat', base_stat?: number | null, stat?: { __typename?: 'BaseName', name?: string | null } | null } | null> | null } | null };

export type ListPokemonsQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
}>;


export type ListPokemonsQuery = { __typename?: 'Query', pokemons?: { __typename?: 'PokemonList', results?: Array<{ __typename?: 'PokemonItem', id?: number | null, name?: string | null, image?: string | null, artwork?: string | null, dreamworld?: string | null } | null> | null } | null };


export const GetPokemonDocument = gql`
    query GetPokemon($name: String!) {
  pokemon(name: $name) {
    id
    name
    height
    weight
    abilities {
      ability {
        name
      }
    }
    types {
      type {
        name
      }
    }
    stats {
      base_stat
      stat {
        name
      }
    }
  }
}
    `;
export const ListPokemonsDocument = gql`
    query ListPokemons($limit: Int!, $offset: Int!) {
  pokemons(limit: $limit, offset: $offset) {
    results {
      id
      name
      image
      artwork
      dreamworld
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetPokemon(variables: GetPokemonQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetPokemonQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPokemonQuery>(GetPokemonDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPokemon', 'query', variables);
    },
    ListPokemons(variables: ListPokemonsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ListPokemonsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListPokemonsQuery>(ListPokemonsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ListPokemons', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockGetPokemonQuery(
 *   ({ query, variables }) => {
 *     const { name } = variables;
 *     return HttpResponse.json({
 *       data: { pokemon }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockGetPokemonQuery = (resolver: GraphQLResponseResolver<GetPokemonQuery, GetPokemonQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<GetPokemonQuery, GetPokemonQueryVariables>(
    'GetPokemon',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockListPokemonsQuery(
 *   ({ query, variables }) => {
 *     const { limit, offset } = variables;
 *     return HttpResponse.json({
 *       data: { pokemons }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockListPokemonsQuery = (resolver: GraphQLResponseResolver<ListPokemonsQuery, ListPokemonsQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<ListPokemonsQuery, ListPokemonsQueryVariables>(
    'ListPokemons',
    resolver,
    options
  )


export const mockAbility = (overrides?: Partial<Ability>): Ability => {
    return {
        ability: overrides && overrides.hasOwnProperty('ability') ? overrides.ability! : mockBaseName(),
        is_hidden: overrides && overrides.hasOwnProperty('is_hidden') ? overrides.is_hidden! : true,
        slot: overrides && overrides.hasOwnProperty('slot') ? overrides.slot! : 8711,
    };
};

export const mockBaseList = (overrides?: Partial<BaseList>): BaseList => {
    return {
        count: overrides && overrides.hasOwnProperty('count') ? overrides.count! : 7723,
        message: overrides && overrides.hasOwnProperty('message') ? overrides.message! : 'commodi',
        next: overrides && overrides.hasOwnProperty('next') ? overrides.next! : 'placeat',
        previous: overrides && overrides.hasOwnProperty('previous') ? overrides.previous! : 'iste',
        results: overrides && overrides.hasOwnProperty('results') ? overrides.results! : [mockBaseName()],
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : false,
    };
};

export const mockBaseName = (overrides?: Partial<BaseName>): BaseName => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 9445,
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'aut',
        url: overrides && overrides.hasOwnProperty('url') ? overrides.url! : 'laborum',
    };
};

export const mockBaseResponse = (overrides?: Partial<BaseResponse>): BaseResponse => {
    return {
        message: overrides && overrides.hasOwnProperty('message') ? overrides.message! : 'officiis',
        params: overrides && overrides.hasOwnProperty('params') ? overrides.params! : unknown,
        response: overrides && overrides.hasOwnProperty('response') ? overrides.response! : unknown,
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : true,
    };
};

export const mockGameIndex = (overrides?: Partial<GameIndex>): GameIndex => {
    return {
        game_index: overrides && overrides.hasOwnProperty('game_index') ? overrides.game_index! : 5927,
        version: overrides && overrides.hasOwnProperty('version') ? overrides.version! : mockBaseName(),
    };
};

export const mockHeldItem = (overrides?: Partial<HeldItem>): HeldItem => {
    return {
        item: overrides && overrides.hasOwnProperty('item') ? overrides.item! : mockBaseName(),
        version_details: overrides && overrides.hasOwnProperty('version_details') ? overrides.version_details! : [mockVersionDetail()],
    };
};

export const mockMove = (overrides?: Partial<Move>): Move => {
    return {
        move: overrides && overrides.hasOwnProperty('move') ? overrides.move! : mockBaseName(),
        version_group_details: overrides && overrides.hasOwnProperty('version_group_details') ? overrides.version_group_details! : [mockVersionGroupDetail()],
    };
};

export const mockPokemon = (overrides?: Partial<Pokemon>): Pokemon => {
    return {
        abilities: overrides && overrides.hasOwnProperty('abilities') ? overrides.abilities! : [mockAbility()],
        base_experience: overrides && overrides.hasOwnProperty('base_experience') ? overrides.base_experience! : 165,
        forms: overrides && overrides.hasOwnProperty('forms') ? overrides.forms! : [mockBaseName()],
        game_indices: overrides && overrides.hasOwnProperty('game_indices') ? overrides.game_indices! : [mockGameIndex()],
        height: overrides && overrides.hasOwnProperty('height') ? overrides.height! : 8871,
        held_items: overrides && overrides.hasOwnProperty('held_items') ? overrides.held_items! : [mockHeldItem()],
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 9083,
        is_default: overrides && overrides.hasOwnProperty('is_default') ? overrides.is_default! : false,
        location_area_encounters: overrides && overrides.hasOwnProperty('location_area_encounters') ? overrides.location_area_encounters! : 'inventore',
        message: overrides && overrides.hasOwnProperty('message') ? overrides.message! : 'illum',
        moves: overrides && overrides.hasOwnProperty('moves') ? overrides.moves! : [mockMove()],
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'et',
        order: overrides && overrides.hasOwnProperty('order') ? overrides.order! : 8331,
        species: overrides && overrides.hasOwnProperty('species') ? overrides.species! : mockBaseName(),
        sprites: overrides && overrides.hasOwnProperty('sprites') ? overrides.sprites! : mockSprite(),
        stats: overrides && overrides.hasOwnProperty('stats') ? overrides.stats! : [mockStat()],
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : false,
        types: overrides && overrides.hasOwnProperty('types') ? overrides.types! : [mockType()],
        weight: overrides && overrides.hasOwnProperty('weight') ? overrides.weight! : 427,
    };
};

export const mockPokemonItem = (overrides?: Partial<PokemonItem>): PokemonItem => {
    return {
        artwork: overrides && overrides.hasOwnProperty('artwork') ? overrides.artwork! : 'perferendis',
        dreamworld: overrides && overrides.hasOwnProperty('dreamworld') ? overrides.dreamworld! : 'aut',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 1258,
        image: overrides && overrides.hasOwnProperty('image') ? overrides.image! : 'ut',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'recusandae',
        url: overrides && overrides.hasOwnProperty('url') ? overrides.url! : 'illo',
    };
};

export const mockPokemonList = (overrides?: Partial<PokemonList>): PokemonList => {
    return {
        count: overrides && overrides.hasOwnProperty('count') ? overrides.count! : 7955,
        message: overrides && overrides.hasOwnProperty('message') ? overrides.message! : 'ut',
        next: overrides && overrides.hasOwnProperty('next') ? overrides.next! : 'aut',
        nextOffset: overrides && overrides.hasOwnProperty('nextOffset') ? overrides.nextOffset! : 123,
        params: overrides && overrides.hasOwnProperty('params') ? overrides.params! : unknown,
        prevOffset: overrides && overrides.hasOwnProperty('prevOffset') ? overrides.prevOffset! : 326,
        previous: overrides && overrides.hasOwnProperty('previous') ? overrides.previous! : 'aut',
        results: overrides && overrides.hasOwnProperty('results') ? overrides.results! : [mockPokemonItem()],
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : false,
    };
};

export const mockQuery = (overrides?: Partial<Query>): Query => {
    return {
        abilities: overrides && overrides.hasOwnProperty('abilities') ? overrides.abilities! : mockBaseList(),
        ability: overrides && overrides.hasOwnProperty('ability') ? overrides.ability! : mockBaseResponse(),
        berries: overrides && overrides.hasOwnProperty('berries') ? overrides.berries! : mockBaseList(),
        berry: overrides && overrides.hasOwnProperty('berry') ? overrides.berry! : mockBaseResponse(),
        eggGroup: overrides && overrides.hasOwnProperty('eggGroup') ? overrides.eggGroup! : mockBaseResponse(),
        eggGroups: overrides && overrides.hasOwnProperty('eggGroups') ? overrides.eggGroups! : mockBaseList(),
        encounterMethod: overrides && overrides.hasOwnProperty('encounterMethod') ? overrides.encounterMethod! : mockBaseResponse(),
        encounterMethods: overrides && overrides.hasOwnProperty('encounterMethods') ? overrides.encounterMethods! : mockBaseList(),
        evolutionChain: overrides && overrides.hasOwnProperty('evolutionChain') ? overrides.evolutionChain! : mockBaseResponse(),
        evolutionChains: overrides && overrides.hasOwnProperty('evolutionChains') ? overrides.evolutionChains! : mockBaseList(),
        evolutionTrigger: overrides && overrides.hasOwnProperty('evolutionTrigger') ? overrides.evolutionTrigger! : mockBaseResponse(),
        evolutionTriggers: overrides && overrides.hasOwnProperty('evolutionTriggers') ? overrides.evolutionTriggers! : mockBaseList(),
        gender: overrides && overrides.hasOwnProperty('gender') ? overrides.gender! : mockBaseResponse(),
        genders: overrides && overrides.hasOwnProperty('genders') ? overrides.genders! : mockBaseList(),
        growthRate: overrides && overrides.hasOwnProperty('growthRate') ? overrides.growthRate! : mockBaseResponse(),
        growthRates: overrides && overrides.hasOwnProperty('growthRates') ? overrides.growthRates! : mockBaseList(),
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : mockBaseResponse(),
        locations: overrides && overrides.hasOwnProperty('locations') ? overrides.locations! : mockBaseList(),
        move: overrides && overrides.hasOwnProperty('move') ? overrides.move! : mockBaseResponse(),
        moves: overrides && overrides.hasOwnProperty('moves') ? overrides.moves! : mockBaseList(),
        nature: overrides && overrides.hasOwnProperty('nature') ? overrides.nature! : mockBaseResponse(),
        natures: overrides && overrides.hasOwnProperty('natures') ? overrides.natures! : mockBaseList(),
        pokemon: overrides && overrides.hasOwnProperty('pokemon') ? overrides.pokemon! : mockPokemon(),
        pokemons: overrides && overrides.hasOwnProperty('pokemons') ? overrides.pokemons! : mockPokemonList(),
        region: overrides && overrides.hasOwnProperty('region') ? overrides.region! : mockBaseResponse(),
        regions: overrides && overrides.hasOwnProperty('regions') ? overrides.regions! : mockBaseList(),
        species: overrides && overrides.hasOwnProperty('species') ? overrides.species! : mockBaseList(),
        types: overrides && overrides.hasOwnProperty('types') ? overrides.types! : mockBaseList(),
    };
};

export const mockSprite = (overrides?: Partial<Sprite>): Sprite => {
    return {
        back_default: overrides && overrides.hasOwnProperty('back_default') ? overrides.back_default! : 'expedita',
        back_female: overrides && overrides.hasOwnProperty('back_female') ? overrides.back_female! : 'iste',
        back_shiny: overrides && overrides.hasOwnProperty('back_shiny') ? overrides.back_shiny! : 'dolorum',
        back_shiny_female: overrides && overrides.hasOwnProperty('back_shiny_female') ? overrides.back_shiny_female! : 'repudiandae',
        front_default: overrides && overrides.hasOwnProperty('front_default') ? overrides.front_default! : 'quod',
        front_female: overrides && overrides.hasOwnProperty('front_female') ? overrides.front_female! : 'est',
        front_shiny: overrides && overrides.hasOwnProperty('front_shiny') ? overrides.front_shiny! : 'natus',
        front_shiny_female: overrides && overrides.hasOwnProperty('front_shiny_female') ? overrides.front_shiny_female! : 'eaque',
    };
};

export const mockStat = (overrides?: Partial<Stat>): Stat => {
    return {
        base_stat: overrides && overrides.hasOwnProperty('base_stat') ? overrides.base_stat! : 9323,
        effort: overrides && overrides.hasOwnProperty('effort') ? overrides.effort! : 8958,
        stat: overrides && overrides.hasOwnProperty('stat') ? overrides.stat! : mockBaseName(),
    };
};

export const mockType = (overrides?: Partial<Type>): Type => {
    return {
        slot: overrides && overrides.hasOwnProperty('slot') ? overrides.slot! : 3506,
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : mockBaseName(),
    };
};

export const mockVersionDetail = (overrides?: Partial<VersionDetail>): VersionDetail => {
    return {
        rarity: overrides && overrides.hasOwnProperty('rarity') ? overrides.rarity! : 292,
        version: overrides && overrides.hasOwnProperty('version') ? overrides.version! : mockBaseName(),
    };
};

export const mockVersionGroupDetail = (overrides?: Partial<VersionGroupDetail>): VersionGroupDetail => {
    return {
        level_learned_at: overrides && overrides.hasOwnProperty('level_learned_at') ? overrides.level_learned_at! : 5342,
        move_learn_method: overrides && overrides.hasOwnProperty('move_learn_method') ? overrides.move_learn_method! : mockBaseName(),
        version_group: overrides && overrides.hasOwnProperty('version_group') ? overrides.version_group! : mockBaseName(),
    };
};
