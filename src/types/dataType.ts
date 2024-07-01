interface ChatData {
  id: string;
  name: string;
  online: boolean;
  image: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadMessageCount: number;
}

interface UserData {
  name: string;
  userId: string;
  email: string;
  image: string;
  bio?: string;
}

interface NotificationData {
  id: string;
  name: string;
  image: string;
}

interface MessageData {
  id: string;
  message: string;
  time: string;
  senderId: string;
  attachments: AttachmentData[]
  chatId: string;
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



export type { ChatData, UserData, NotificationData, MessageData, AttachmentData, GroupInfo}