import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://mks-challenge-api-frontend.herokuapp.com/api/v1'
  }),
  reducerPath: 'pokemonApi',
  endpoints: (build) => ({
    getPokemonByName: build.query({
      query: () => '/products?page=1&rows=10&sortBy=id&orderBy=DESC',
    }),
  }),
})

export const { useGetPokemonByNameQuery } = api