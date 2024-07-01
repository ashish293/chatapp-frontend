import { ChatData, GroupInfo,  MessageData, NotificationData, UserData } from "../types/dataType";


export const dummyUserData:UserData[] =  [
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "userId": "johndoe123",
      "image": "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "userId": "janesmith456",
      "image": "https://randomuser.me/api/portraits/women/75.jpg"
    },
    {
      "name": "Alex Johnson",
      "email": "alex.johnson@example.com",
      "userId": "alexj567",
      "image": "https://randomuser.me/api/portraits/men/76.jpg"
    },
    {
      "name": "Emily Brown",
      "email": "emily.brown@example.com",
      "userId": "emilyb789",
      "image": "https://randomuser.me/api/portraits/women/76.jpg"
    },
    {
      "name": "Michael Lee",
      "email": "michael.lee@example.com",
      "userId": "mikelee101",
      "image": "https://randomuser.me/api/portraits/men/77.jpg"
    },
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "userId": "johnde123",
      "image": "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "userId": "janesmth456",
      "image": "https://randomuser.me/api/portraits/women/75.jpg"
    },
    {
      "name": "Alex Johnson",
      "email": "alex.johnson@example.com",
      "userId": "alxj567",
      "image": "https://randomuser.me/api/portraits/men/76.jpg"
    },
    {
      "name": "Emily Brown",
      "email": "emily.brown@example.com",
      "userId": "emilyb89",
      "image": "https://randomuser.me/api/portraits/women/76.jpg"
    },
    {
      "name": "Michael Lee",
      "email": "michael.lee@example.com",
      "userId": "mikelee11",
      "image": "https://randomuser.me/api/portraits/men/77.jpg"
    }
  ]

export const dummyNotificationData:NotificationData[] = [
  {
    id: "1",
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: "2",
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
]


export const dummyChatData: ChatData[] = [
  {
    id: "1",
    name: "John Doe",
    online: true,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    lastMessage: "Hey, how's it going?",
    lastMessageTime: "Just now",
    unreadMessageCount: 2,
  },
  {
    id: "2",
    name: "Jane Smith",
    online: false,
    image: "https://randomuser.me/api/portraits/women/82.jpg",
    lastMessage: "I'm good, thanks!",
    lastMessageTime: "10:30 AM",
    unreadMessageCount: 0,
  },
  {
    id: "3",
    name: "Alex Johnson",
    online: true,
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    lastMessage: "What are you up to?",
    lastMessageTime: "09:30 AM",
    unreadMessageCount: 1,
  },
  {
    id: "4",
    name: "Emily Davis",
    online: false,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    lastMessage: "Let's meet up later!",
    lastMessageTime: "Yesterday",
    unreadMessageCount: 3,
  },
  {
    id: "5",
    name: "Michael Wilson",
    online: false,
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    lastMessage: "Can you help me with something? I am stuck!",
    lastMessageTime: "05-12-2021",
    unreadMessageCount: 0,
  },
  {
    id: "6",
    name: "Sarah Thompson",
    online: true,
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    lastMessage: "I'll be there soon!",
    lastMessageTime: "05-12-2021",
    unreadMessageCount: 2,
  },
];


export const dummyMessageData:MessageData[] =[
  {
    id: "1",
    chatId: "1",
    senderId: "1",
    message: "Hey, how's it going?",
    time:"2021-12-05T10:30:00.000Z",
    attachments: [],
  },
  {
    id: "2",
    chatId: "1",
    senderId: "1",
    message: "I'm good, thanks!",
    time:"2021-12-05T10:35:00.000Z",
    attachments: [
      {public_id: "sample", url: "https://res.cloudinary.com/dkkgmzpqd/image/upload/v1638690134/sample.jpg"}
    ],
  },
  {
    id: "3",
    chatId: "1",
    senderId: "1",
    message: "What are you up to?",
    time:"2021-12-05T10:40:00.000Z",
    attachments: [
      // video
      {public_id: "sample", url: "https://res.cloudinary.com/demo/video/upload/q_auto,vc_h265/rafting.mp4"}
    ],
  },
  {
    id: "4",
    chatId: "1",
    senderId: "2",
    message: "Let's meet up later!",
    time:"2021-12-05T10:45:00.000Z",
    attachments: [],
  },
  {
    id: "5",
    chatId: "1",
    senderId: "2",
    message: "Can you help me with something? I am stuck!",
    time:"2021-12-05T10:50:00.000Z",
    attachments: [],
  },
  {
    id: "6",
    chatId: "1",
    senderId: "1",
    message: "I'll be there soon!",
    time:"2021-12-05T10:55:00.000Z",
    attachments: [],
  },
  {
    id: "7",
    chatId: "1",
    senderId: "2",
    message: "How's the weather today?",
    time:"2021-12-05T11:00:00.000Z",
    attachments: [],
  },
  {
    id: "8",
    chatId: "1",
    senderId: "2",
    message: "Did you watch the latest movie?",
    time:"2021-12-05T11:05:00.000Z",
    attachments: [],
  },
  {
    id: "9",
    chatId: "1",
    senderId: "2",
    message: "I'm going on vacation next week!",
    time:"2021-12-05T11:10:00.000Z",
    attachments: [],
  },
  {
    id: "10",
    chatId: "1",
    senderId: "1",
    message: "Let's grab lunch together!",
    time:"2021-12-05T11:15:00.000Z",
    attachments: [],
  }
]

export const dummyGroupList:GroupInfo[] = [
  {
    id: "1",
    name: "Group 1",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    members: dummyUserData,
  },
  {
    id: "2",
    name: "Group 2",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    members: dummyUserData,
  },
]