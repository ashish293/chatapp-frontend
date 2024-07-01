import { Box, Typography } from "@mui/material";
import { MessageData } from "../../types/dataType";
import { memo } from "react";
import Attactment from "./Attachment";

const MessageItem = ({ data }: { data: MessageData }) => {
	return (
		<Box
			key={data.id}
			sx={{
				...styles.messageBoxStyles,
				backgroundColor: data.senderId === "1" ? "#f3f3f3" : "#f3f3f3",
				alignSelf: data.senderId === "1" ? "flex-start" : "flex-end",
			}}
			onScroll={() => {
				console.log("scrolling");
			}}
		>
			{data.attachments.map((attachment) => (
				<Attactment data={attachment} />
			))}
			<Typography>{data.message}</Typography>
			<Typography variant="caption">{new Date(data.time).toLocaleString()}</Typography>
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
