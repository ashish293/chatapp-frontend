import { Box, Typography } from "@mui/material";
import { MessageData } from "../../types/dataType";
import { memo } from "react";
import Attactment from "./Attachment";
import { getLocalUser } from "../../utils/utility";

const MessageItem = ({ data }: { data: MessageData }) => {
	const currentUserId = getLocalUser()?.id;

	return (
		<Box
			sx={{
				...styles.messageBoxStyles,
				backgroundColor: data.sender?.id === currentUserId ? "#f3f3f3" : "#f3f3f3",
				alignSelf: data.sender?.id === currentUserId ? "flex-end" : "flex-start",
			}}
		>
			{data.attachments?.map((attachment) => (
				<Attactment data={attachment} />
			))}
			<Typography>{data.content}</Typography>
			<Typography variant="caption">{new Date(data.createdAt).toLocaleString()}</Typography>
		</Box>
	);
};

export default memo(MessageItem);

const styles = {
	messageBoxStyles: {
		backgroundColor: "#f3f3f3",
		borderRadius: "10px",
		alignSelf: "flex-start",
		margin: 1,
		padding: 1,
		width: "fit-content",
	},
};
