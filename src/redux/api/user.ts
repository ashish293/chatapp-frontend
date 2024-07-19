import { GetRequestsResponse, GetUserResponse, ResponseType } from '../../types/responseType'
import { emptySplitApi } from './emptySplitApi'


export const userApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers : build.query<GetUserResponse, {email:string, name:string}>({
      query:({email, name})=>({
        url:`user/find?name=${name}&email=${email}`,
        credentials:"include"
      })
    }),
    getRequests : build.query<GetRequestsResponse, void>({
      query:()=>({
        url:`chat/getRequests`,
        credentials:"include"
      })
    }),
    sendRequest:build.mutation<ResponseType, {userId:string}>({
      query:({userId})=>({
        url:`chat/sendRequest`,
        body:{userId},
        method:"POST",
        credentials:"include"
      })
    }),
    acceptRequest:build.mutation<ResponseType, {requestId:string}>({
      query:({requestId})=>({
        url:`chat/acceptRequest`,
        body:{requestId},
        method:"POST",
        credentials:"include"
      })
    }),
  }),
  
  overrideExisting: false,
})

export const {useGetUsersQuery, useGetRequestsQuery, useAcceptRequestMutation, useSendRequestMutation} = userApi