interface ChatDataType {
  id: string;
  name: string;
  online?: boolean;
  image?: string;
  lastMessage?: string;
  lastMessageTime?: string;
  unreadMessageCount?: number;
}

interface UserDataType{
  id: string;
  name: string;
  email: string;
  image?: string;
  bio?: string;
}

interface UserData {
  name: string;
  id: string;
  email: string;
  image?: string;
  bio?: string;
}

interface NotificationData {
  id: string;
  name: string;
  image: string;
}

interface MessageData {
  id: string;
  content: string;
  sender: undefined | Pick<UserData, "name" | "id" | "image">;
  attachments: AttachmentData[]
  createdAt: string;
}

interface AttachmentData {
  url: string;
  public_id: string;
}

interface GroupInfo {
  id: string;
  name: string;
  image: string;
  members: UserData[];
}

type MemberType = {
  id: string;
  name: string;
  email: string;
  image?: string;
};

type ChatType = {
  id: string;
  name: string;
  isGroup: boolean;
  creator: string;
  members: MemberType[];
  createdAt: string;
  __v: number;
};

export type { ChatType, ChatDataType, UserData, NotificationData, MessageData, AttachmentData, GroupInfo}