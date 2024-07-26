import { Avatar, Badge, Box, Grid, Typography, alpha } from "@mui/material";
import { ChatItemProps } from "../../types/propsType";
import { memo } from "react";
import { useParams } from "react-router-dom";
import { Link } from "../style/StyledComponent";
import { dateParser } from "../../utils/utility";

const ChatItem = ({ chat, closeDrawer, currentUser }: ChatItemProps) => {
	const chatId = useParams().chatId;

	const rightClick = (e: any) => {
		e.preventDefault();
		console.log("Right Clicked");
	};
	return (
		<Link to={`/chat/${chat?.id}`} onContextMenu={rightClick} onClick={closeDrawer}>
			<Grid container sx={styles.container(chat?.id == chatId)}>
				<Grid item xs={2}>
					{/* <Badge
						overlap="circular"
						variant={chat?.online ? "dot" : "standard"}
						anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
						color="success"
					> */}
					<Avatar src={chat?.image} sx={styles.avatar} alt={chat?.name} />
					{/* </Badge> */}
				</Grid>
				<Grid item xs={7} sx={{ paddingLeft: 1 }}>
					<Typography variant="subtitle1" fontWeight={500} style={styles.ellipsis}>
						{chat?.name}
					</Typography>
					<Typography variant="body2" style={styles.ellipsis}>
						{(chat?.lastMessage?.sender?.id == currentUser?.id ? "You: " : "") +
							chat?.lastMessage?.content}
					</Typography>
				</Grid>
				<Grid
					item
					xs={3}
					sx={{
						display: "flex",
						alignItems: "flex-end",
						flexDirection: "column",
						// justifyContent: "flex-start",
						textAlign: "right",
						// height: "100%",
						// flex: 1,
					}}
				>
					<Typography variant="body2">{dateParser(chat?.lastMessage?.createdAt)}</Typography>
					<Box sx={{}}>
						<Typography
							sx={{
								display: "none",
								// justifyContent: "center",
								// alignItems: "center",
								width: "50px",
								height: "50px",
								backgroundColor: "primary.main",
								borderRadius: "50%",
								// alignSelf: "flex-end",
								left: "auto",
								right: "5px",
								fontSize: 11,
								padding: 0.3,
								color: "white",
							}}
							variant="caption"
						>
							{10}
						</Typography>
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
		// flex: 1,
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
