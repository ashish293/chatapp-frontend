import { emptySplitApi } from './emptySplitApi'

export const userApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    signin: build.mutation({
      query: (body) => ({
        url: 'user/signin',
        method: 'POST',
        body,
      }),
    }),
    logout:build.query({
      query: () => ({
        url: 'user/logout',
        method: 'GET',
    })
    })
  }),
  
  overrideExisting: false,
})

export const { useSigninMutation, useLogoutQuery } = userApi