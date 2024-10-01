import { useEffect, useRef, useState } from "react";
import ChatItem from "../../components/shared/ChatItem";
import events from "../../constant/events";
import { ChatDataType, MessageData } from "../../types/dataType";
import Api from "../../utils/Api";
import socket from "../../utils/socket";
import { getLocalUser } from "../../utils/utility";
import { Box, Menu, MenuItem, Stack, TextField, Typography } from "@mui/material";
import IconBtn from "../shared/IconBtn";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { logout } from "../../utils/service";

const SideBar = ({ closeDrawer }: { closeDrawer: () => void }) => {
	const [listData, setChatList] = useState<ChatDataType[]>();
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const menuOpen = Boolean(anchorEl);

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

	const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
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
	}, []);

	return (
		<Box>
			<Typography variant="h3" color="primary" m={1} mb={0}>
				Earth
			</Typography>
			<Stack direction={"row"} marginLeft={2} marginBottom={1}>
				<TextField id="standard-basic" label="Search" variant="standard" fullWidth />

				<IconBtn
					icon={<MenuIcon color="primary" />}
					title="Menu"
					onClick={handleMenu}
					aria-controls={menuOpen ? "basic-menu" : undefined}
					aria-haspopup="true"
					aria-expanded={menuOpen ? "true" : undefined}
				/>
			</Stack>
			{listData?.map((chat) => (
				<ChatItem key={chat.id} chat={chat} closeDrawer={closeDrawer} currentUser={currentUser} />
			))}
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={menuOpen}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<MenuItem onClick={logout}>Logout</MenuItem>
			</Menu>
		</Box>
	);
};

export default SideBar;
