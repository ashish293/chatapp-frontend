import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import { IconButton, Stack, TextField } from "@mui/material";
import { useLocation } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import MessageItem from "../components/shared/MessageItem";
import { useGetMessagesQuery, useSendMessageMutation } from "../redux/api/chat";
import { useEffect, useRef, useState } from "react";
import socket from "../utils/socket";
import events from "../constant/events";
import { MessageData } from "../types/dataType";
import Api from "../utils/Api";
import toast from "react-hot-toast";
import { getLocalUser } from "../utils/utility";
import InfiniteScroll from "../components/specific/InfiniteScroll";

const Chat = () => {
	const [message, setMessage] = useState("");
	const totalPages = useRef();
	const pageNumber = useRef<number>(0);
	const [data, setData] = useState<MessageData[]>();
	const [sendMessage] = useSendMessageMutation();
	let location = useLocation();
	const currentUser = getLocalUser();

	const getMessages = async () => {
		console.log("get messages");

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
	// useEffect(() => {
	// 	getMessages();
	// }, [location]);

	const handleAttachment = () => {
		console.log("attachment");
	};
	interface SocketMessageType extends MessageData {
		chatId: string;
	}
	socket.off(events.NEW_MESSAGE);
	socket.on(events.NEW_MESSAGE, (message: SocketMessageType) => {
		console.log(message);

		if (message.chatId === location.pathname.split("/").pop()) {
			setData([message, ...(data ?? [])]);
		}
	});

	const handleSend = () => {
		if (!message) return;
		socket.emit(
			events.MESSAGE,
			{
				message,
				chatId: location.pathname.split("/").pop() ?? "",
				// sender: { id: currentUser?.id },
			},
			(res: any) => {
				console.log(res);
				if (res?.success && res?.data) {
					setData([res?.data, ...(data ?? [])]);
				} else {
					toast.error(res?.message);
				}
			}
		);
		setMessage("");
		// const formData = new FormData();
		// formData.append("message", message);
		// sendMessage({
		// 	chatId: location.pathname.split("/").pop() ?? "",
		// 	formData: formData,
		// });
		// setMessage("");
	};
	const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter" && !e.shiftKey && !e.altKey) {
			e.preventDefault();
			handleSend();
		}
	};
	// const { data } = useGetMessagesQuery(location.pathname.split("/").pop() ?? "");

	return (
		<Stack width="100%" height="100%">
			<InfiniteScroll
				data={data}
				renderItem={(item) => <MessageItem data={item} key={item?.id} />}
				onReachEnd={getMessages}
				reverse={true}
				style={{ flex: 1 }}
			/>
			<Stack direction={"row"} my={1}>
				<IconButton onClick={handleAttachment}>
					<AttachFileIcon color="primary" />
				</IconButton>
				<TextField
					placeholder="Type a message"
					fullWidth
					size="small"
					multiline
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					onKeyDown={handleEnter}
				/>
				<IconButton type="submit" onClick={handleSend}>
					<SendIcon color="primary" />
				</IconButton>
			</Stack>
		</Stack>
	);
};

export default AppLayout(Chat);
