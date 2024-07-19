import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import { IconButton, Stack, TextField } from "@mui/material";
import { useLocation } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import MessageItem from "../components/shared/MessageItem";
import { useGetMessagesQuery, useSendMessageMutation } from "../redux/api/chat";
import { useState } from "react";

const Chat = () => {
	
	const [message, setMessage] = useState("");
	const [sendMessage] = useSendMessageMutation();
	const handleAttachment = () => {
		console.log("Attachment");
	};

	const handleSend = () => {
		const formData = new FormData();
		formData.append("message", message);
		sendMessage({
			chatId: location.pathname.split("/").pop() ?? "",
			formData: formData,
		});
		setMessage("");
	};
	const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter" && !e.shiftKey && !e.altKey) {
			e.preventDefault();
			handleSend();
		}
	};
	let location = useLocation();
	const { data } = useGetMessagesQuery(location.pathname.split("/").pop() ?? "");
	return (
		<Stack width="100%" height="100%">
			<Stack direction="column-reverse" height="90%" sx={{ overflowY: "scroll", p: 2 }}>
				{data?.data?.map((message) => (
					<MessageItem key={message.id} data={message} />
				))}
			</Stack>
			<Stack direction={"row"}>
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
