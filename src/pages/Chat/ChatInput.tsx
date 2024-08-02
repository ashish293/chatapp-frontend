import { Stack, IconButton, TextField } from "@mui/material";
import { VisuallyHiddenInput } from "../../components/style/StyledComponent";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState } from "react";
import { MessageData } from "../../types/dataType";
import socket from "../../utils/socket";
import events from "../../constant/events";
import toast from "react-hot-toast";
import { useFileHandler } from "../../hooks/customHook";

const ChatInput = ({ updateChatList }: { updateChatList: (message: MessageData) => void }) => {
	const [message, setMessage] = useState<string>("");
	const { file, fileUrl, handleFileChange } = useFileHandler();

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
					updateChatList(res?.data);
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

	const handleAttachment = () => {
		console.log("attachment");
	};
	return (
		<Stack>
			<Stack direction={"row"} my={1}>
				<IconButton onClick={handleAttachment}>
					<AttachFileIcon color="primary" />
					<VisuallyHiddenInput
						type="file"
						name="attachments"
						onChange={handleFileChange}
						multiple
					/>
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

export default ChatInput;
