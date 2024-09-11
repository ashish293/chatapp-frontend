import SearchIcon from "@mui/icons-material/Search";
import { AppBar, Backdrop, Box, Toolbar, Typography } from "@mui/material";
import { Suspense, useState } from "react";
// import { useNavigate } from "react-router-dom";
import IconBtn from "../shared/IconBtn";
import { Link } from "../style/StyledComponent";
import SearchDialog from "../dialog/SearchDialog";

// type HeaderProps = {
// 	title: string;
// 	image?: string;
// 	search?: () => {};
// };

const Header = () => {
	const [isSearch, setIsSearch] = useState<boolean>(false);
	// const [isNotifications, setIsNotifications] = useState<boolean>(false);
	// const [isNewGroup, setIsNewGroup] = useState<boolean>(false);
	// const [isLogout, setIsLogout] = useState<boolean>(false);
	// const navigate = useNavigate();
	const handleSearch = () => {
		console.log("Search");
		setIsSearch(true);
	};

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
					<Box>
						<IconBtn title={"Search"} icon={<SearchIcon />} onClick={handleSearch} />
					</Box>
				</Toolbar>
			</AppBar>

			{isSearch && (
				<Suspense fallback={<Backdrop open />}>
					<SearchDialog onClose={() => setIsSearch(false)} />
				</Suspense>
			)}

			{/* {isNotifications && (
				<Suspense fallback={<Backdrop open />}>
					<Notifications onClose={() => setIsNotifications(false)} />
				</Suspense>
			)} */}
			{/* 
			{isNewGroup && (
				<Suspense fallback={<Backdrop open />}>
					<NewGroup onClose={() => setIsNewGroup(false)} />
				</Suspense>
			)}

			{isLogout && (
				<Suspense fallback={<Backdrop open />}>
					<LogoutDialog onClose={() => setIsLogout(false)} />
				</Suspense>
			)} */}
		</>
	);
};

export default Header;
