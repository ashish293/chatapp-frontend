import { Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import AppLayout from "../../components/layout/AppLayout";
import MessageItem from "../../components/shared/MessageItem";
import InfiniteScroll from "../../components/specific/InfiniteScroll";
import events from "../../constant/events";
import { MessageData } from "../../types/dataType";
import Api from "../../utils/Api";
import socket from "../../utils/socket";
import ChatInput from "./ChatInput";

const Chat = () => {
	const totalPages = useRef();
	const pageNumber = useRef<number>(0);
	const [data, setData] = useState<MessageData[]>();
	let location = useLocation();
	const updateChatList = (message: MessageData) => {
		setData([message, ...(data ?? [])]);
	};

	const getMessages = async () => {
		if (pageNumber.current + 1 === totalPages.current) return;
		const chatId = location.pathname.split("/").pop();
		if (!chatId) return;
		const res = await Api.get(
			`chat/messages/${location.pathname.split("/").pop()}?pageNumber=${pageNumber.current + 1}`
		);
		pageNumber.current++;
		setData([...(data ?? []), ...res.data.data]);
		totalPages.current = res.data.totalPages;
	};

	interface SocketMessageType extends MessageData {
		chatId: string;
	}
	const socketListener = (message: SocketMessageType) => {
		if (message.chatId === location.pathname.split("/").pop()) {
			setData([message, ...(data ?? [])]);
		}
	};
	useEffect(() => {
		socket.on(events.NEW_MESSAGE, socketListener);
		return () => {
			socket.off(events.NEW_MESSAGE, socketListener);
		};
	});
	return (
		<Stack width="100%" height="100%">
			{/* <Header title={} /> */}
			<InfiniteScroll
				data={data}
				renderItem={(item) => <MessageItem data={item} key={item?.id} />}
				onReachEnd={getMessages}
				reverse={true}
				style={{ flex: 1 }}
			/>
			<ChatInput updateChatList={updateChatList} />
		</Stack>
	);
};

export default AppLayout(Chat);
