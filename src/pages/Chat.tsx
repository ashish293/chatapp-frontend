import { Box, FormControl, IconButton, Stack, TextField, Typography } from "@mui/material";
import AppLayout from "../components/layout/AppLayout";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import { dummyMessageData } from "../constant/sampleData";
import MessageItem from "../components/shared/MessageItem";

const Chat = () => {
	const handleAttachment = () => {
		console.log("Attachment");
	};
	const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Send");
	};

	return (
		<Stack width="100%" height="100%">
			<Stack direction="column-reverse" height="90%" sx={{ overflowY: "scroll", p: 2 }}>
				{dummyMessageData.map((message) => (
					<MessageItem key={message.id} data={message} />
				))}
			</Stack>
			<form
				onSubmit={handleSend}
				style={{
					height: "10%",
					display: "flex",
					flexDirection: "row",
					width: "100%",
					alignItems: "center",
				}}
			>
				<IconButton onClick={handleAttachment}>
					<AttachFileIcon color="primary" />
				</IconButton>
				<TextField placeholder="Type a message" fullWidth size="small" multiline />
				<IconButton type="submit">
					<SendIcon color="primary" />
				</IconButton>
			</form>
		</Stack>
	);
};

export default AppLayout(Chat);
