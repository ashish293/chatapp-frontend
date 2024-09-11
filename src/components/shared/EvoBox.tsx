import { Avatar, Badge, Box, Grid, Typography, alpha } from "@mui/material";
import { ChatItemProps } from "../../types/propsType";
import { memo } from "react";
import { useParams } from "react-router-dom";
import { Link } from "../style/StyledComponent";

const ChatItem = ({ chat }: ChatItemProps) => {
	const chatId = useParams().chatId;

	const rightClick = (e: any) => {
		e.preventDefault();
		console.log("Right Clicked");
	};
	return (
		<Link to={`/chat/${chat.id}`} onContextMenu={rightClick}>
			<Grid container sx={styles.container(chat.id == chatId)}>
				<Grid item xs={2}>
					<Badge
						overlap="circular"
						variant={chat.online ? "dot" : "standard"}
						anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
						color="success"
					>
						<Avatar src={chat.image} sx={styles.avatar} alt={chat.name} />
					</Badge>
				</Grid>
				<Grid item xs={7} sx={{ paddingLeft: 1 }}>
					<Typography variant="subtitle2" fontWeight={500} style={styles.ellipsis}>
						{chat.name}
					</Typography>
					{/* <Typography variant="body2" style={styles.ellipsis}>
						{chat.lastMessage}
					</Typography> */}
				</Grid>
				<Grid
					item
					xs={3}
					sx={{
						display: "flex",
						alignItems: "flex-end",
						flexDirection: "column",
						justifyContent: "space-between",
					}}
				>
					{/* <Typography variant="body2">{chat.lastMessageTime}</Typography> */}
					<Box
						sx={{
							display: chat.unreadMessageCount ? "flex" : "none",
							justifyContent: "center",
							alignItems: "center",
							width: "18px",
							height: "18px",
							backgroundColor: "primary.main",
							borderRadius: "50%",
							alignSelf: "flex-end",
							fontSize: 11,
							color: "white",
						}}
					>
						{chat.unreadMessageCount}
					</Box>
				</Grid>
			</Grid>
		</Link>
	);
};

export default memo(ChatItem);

const styles = {
	container: (selected: boolean) => ({
		alignItems: "center",
		borderRadius: "4px",
		backgroundColor: selected ? alpha("#f5f5f5", 0.8) : "transparent",
		"&:hover": {
			backgroundColor: "#f5f5f5",
		},
		padding: 0.8,
	}),
	avatar: {
		width: "100%",
		height: "100%",
		border: "0.5px solid green",
	},
	ellipsis: {
		overflow: "hidden",
		textOverflow: "ellipsis",
		whiteSpace: "nowrap",
	},
};
