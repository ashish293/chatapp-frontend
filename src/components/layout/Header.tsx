import {
	AppBar,
	Backdrop,
	Box,
	Button,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
	useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import IconBtn from "../shared/IconBtn";
import AddIcon from "@mui/icons-material/Add";
import GroupsIcon from "@mui/icons-material/Groups";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import { Suspense, lazy, useState } from "react";
import { Link } from "../style/StyledComponent";
import { useNavigate } from "react-router-dom";
const SearchDialog = lazy(() => import("../dialog/SearchDialog"));
const Notifications = lazy(() => import("../dialog/Notification"));
const NewGroup = lazy(() => import("../dialog/NewGroup"));

const Header = ({ openDrawer }: { openDrawer: () => void }) => {
	const [isSearch, setIsSearch] = useState<boolean>(false);
	const [isNotifications, setIsNotifications] = useState<boolean>(false);
	const [isNewGroup, setIsNewGroup] = useState<boolean>(false);
	const navigate = useNavigate();
	const handleSearch = () => {
		console.log("Search");
		setIsSearch(true);
	};

	const handleCreateGroup = () => {
		console.log("New Group");
		setIsNewGroup(true);
	};
	const handleGroups = () => navigate("/group");
	const handleNotifications = () => {
		console.log("Notifications");
		setIsNotifications(true);
	};
	const handleOpenNavMenu = () => {
		openDrawer();
	};

	const menuItems = [
		{
			title: "Search",
			icon: <SearchIcon />,
			onClick: handleSearch,
		},
		{
			title: "Create Group",
			icon: <AddIcon />,
			onClick: handleCreateGroup,
		},
		{
			title: "Groups",
			icon: <GroupsIcon />,
			onClick: handleGroups,
		},
		{
			title: "Notifications",
			icon: <NotificationsIcon />,
			onClick: handleNotifications,
		},
		{
			title: "Logout",
			icon: <LogoutIcon />,
			onClick: handleNotifications,
		},
	];

	return (
		<>
			<AppBar position="static" sx={{ height: "4rem", zIndex: 5 }}>
				<Toolbar
					sx={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Box sx={{ display: { xs: "none", sm: "block" } }}>
						<Link to="/">
							<Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
								Earth
							</Typography>
						</Link>
					</Box>
					<Box sx={{ display: { xs: "block", sm: "none" } }}>
						<IconButton size="large" aria-label="menu" onClick={handleOpenNavMenu} color="inherit">
							<MenuIcon />
						</IconButton>
					</Box>
					{/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						<Link to="/">Earth</Link>
					</Typography> */}
					<Box>
						{menuItems.map((item, index) => (
							<IconBtn key={index} title={item.title} icon={item.icon} onClick={item.onClick} />
						))}
					</Box>
				</Toolbar>
			</AppBar>

			{isSearch && (
				<Suspense fallback={<Backdrop open />}>
					<SearchDialog onClose={() => setIsSearch(false)} />
				</Suspense>
			)}

			{isNotifications && (
				<Suspense fallback={<Backdrop open />}>
					<Notifications onClose={() => setIsNotifications(false)} />
				</Suspense>
			)}

			{isNewGroup && (
				<Suspense fallback={<Backdrop open />}>
					<NewGroup onClose={() => setIsNewGroup(false)} />
				</Suspense>
			)}
		</>
	);
};

export default Header;
