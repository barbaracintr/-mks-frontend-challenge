import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1'
  }),
  reducerPath: 'productsApi',
  endpoints: (build) => ({
    get: build.query({
      query: () => '/products?page=1&rows=10&sortBy=id&orderBy=DESC',
    }),
  }),
})

export const { useGetQuery } = api