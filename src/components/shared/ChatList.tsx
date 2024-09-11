import { useEffect, useRef, useState } from "react";
import events from "../../constant/events";
import type { ChatDataType, MessageData } from "../../types/dataType";
import Api from "../../utils/Api";
import socket from "../../utils/socket";
import { getLocalUser } from "../../utils/utility";
import ChatItem from "./ChatItem";

const ChatList = ({ closeDrawer }: { closeDrawer: () => void }) => {
	// const { data, isError, isLoading, error } = useGetChatsQuery();
	const [listData, setChatList] = useState<ChatDataType[]>();
	const totalPages = useRef();
	const pageNumber = useRef<number>(0);

	const getChatList = async () => {
		const res = await Api.get("chat/all");
		setChatList(res.data?.data);
		totalPages.current = res.data?.totalPages;
		pageNumber.current = res.data?.pageNumber;
	};

	useEffect(() => {
		getChatList();
	}, []);

	const currentUser = getLocalUser();
	interface SocketMessageType extends MessageData {
		chatId: string;
	}
	const socketListener = (message: SocketMessageType) => {
		console.log("listData", listData);
		const newData = listData?.reduce((acc, chat) => {
			console.log("chat", chat);
			if (chat.id == message.chatId) {
				chat.lastMessage = message;
				acc.unshift(chat);
			} else {
				acc.push(chat);
			}
			return acc;
		}, Array<ChatDataType>());
		setChatList(newData);
	};
	// socket.off(events.NEW_MESSAGE);

	useEffect(() => {
		console.log("socket");

		socket.on(events.NEW_MESSAGE, socketListener);
		// return () => {
		// 	console.log("sockt off");

		// 	socket.off(events.NEW_MESSAGE, socketListener);
		// };
	}, []);

	return (
		<div>
			{listData?.map((chat) => (
				<ChatItem key={chat.id} chat={chat} closeDrawer={closeDrawer} currentUser={currentUser} />
			))}
		</div>
	);
};

export default ChatList;
