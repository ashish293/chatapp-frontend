import {
	Dashboard as DashboardIcon,
	ManageAccounts as ManageAccountsIcon,
	Groups as GroupsIcon,
	Message as MessageIcon,
} from "@mui/icons-material";

const options = [
	{
		name: "Dashboard",
		link: "/admin/dashboard",
		icon: <DashboardIcon />,
	},
	{
		name: "Users",
		link: "/admin/users",
		icon: <ManageAccountsIcon />,
	},
	{
		name: "Chats",
		link: "/admin/chats",
		icon: <GroupsIcon />,
	},
	{
		name: "Messages",
		link: "/admin/messages",
		icon: <MessageIcon />,
	},
];
export default options;
