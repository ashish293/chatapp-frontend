import { ChatDataType, MessageData, UserData } from "./dataType";

interface ResponseType{
  success: boolean;
  message?: string;
  data?: any;
}


interface GetMessagesResponse extends ResponseType{
  data: MessageData[];
    totalPages: number;
    pageSize: number;
    pageNumber: number;
}
interface GetChatResponse extends ResponseType{
  data: ChatDataType[];
  pageSize: number;
  totalPages: number;
}

interface GetUserResponse extends ResponseType{
  data:UserData[];
}

interface GetRequestsResponse extends ResponseType{
  data:{
    id: string;
    sender: {
      name: string;
      email: string;
      image: string;
    }
  }[];
}


export type { ResponseType, GetMessagesResponse, GetChatResponse, GetUserResponse ,GetRequestsResponse}