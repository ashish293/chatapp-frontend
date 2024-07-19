import { emptySplitApi } from './emptySplitApi'
import { GetChatResponse, GetMessagesResponse, ResponseType } from '../../types/responseType'


export const chatApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getChats : build.query<GetChatResponse, void>({
      query:()=>({
        url:"chat/all",
        credentials:"include"
      })
      
    }),
    getMessages : build.query<GetMessagesResponse, string>({
      query:(chatId)=>({
        url:`chat/messages/${chatId}`,
        credentials:"include"
      })
      
    }),
    sendMessage:build.mutation<ResponseType, {chatId:string, formData:FormData}>({
      query:({chatId, formData})=>({
        url:`chat/message/${chatId}`,
        body:formData,
        method:"POST",
        credentials:"include"
      })
    })
  }),
  
  overrideExisting: false,
})

export const { useGetChatsQuery , useGetMessagesQuery, useSendMessageMutation} = chatApi