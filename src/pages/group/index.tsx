import { Box, Drawer, Grid, IconButton, Typography } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import GroupList from "./GroupList";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "../../components/style/StyledComponent";
import { useState } from "react";
import { GroupInfo } from "../../types/dataType";
import ManageGroup from "./ManageGroup";
const index = () => {
	const navigate = useNavigate();
	const handleBack = () => {
		navigate("/");
	};
	const handleDrawer = () => {
		setOpen(true);
	};

	const [open, setOpen] = useState<boolean>(true);
	const [selectedGroup, setGroup] = useState<GroupInfo | undefined>();
	const handleClick = () => {
		if (innerWidth < 600) {
			handleDrawer();
		}
	};
	return (
		<Grid container>
			{innerWidth < 600 && (
				<Drawer open={open} onClose={() => setOpen(false)}>
					<Box sx={{ width: "80vw", p: 1 }}>
						<Link to={"/"}>
							<Box sx={{ alignItems: "center", display: "flex", mb: 1 }}>
								<KeyboardBackspaceIcon color="primary" />
								<Typography variant="h4" color="primary" mr={1}>
									Go to Home
								</Typography>
							</Box>
						</Link>
						<GroupList setGroup={setGroup} selectedGroup={selectedGroup} />
					</Box>
				</Drawer>
			)}
			<Grid item xs={0} sm={4} display={{ sm: "block", xs: "none" }}>
				<Link to={"/group"}>
					<Typography variant="h3" ml={1} color="primary" textAlign="center" m={1}>
						Group
					</Typography>
				</Link>
				<GroupList setGroup={setGroup} selectedGroup={selectedGroup} />
			</Grid>
			<Grid item xs={12} sm={8}>
				<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
					{innerWidth < 600 ? (
						<IconButton onClick={handleDrawer}>
							<MenuIcon fontSize="large" />
						</IconButton>
					) : (
						<IconButton onClick={handleBack} sx={{ marginRight: 1 }}>
							<KeyboardBackspaceIcon fontSize="large" />
						</IconButton>
					)}
				</Box>
				{selectedGroup ? (
					<ManageGroup data={selectedGroup} />
				) : (
					<Typography
						variant="h4"
						fontWeight={500}
						sx={{ mb: 2 }}
						textAlign="center"
						onClick={handleClick}
					>
						Select Group
					</Typography>
				)}
			</Grid>
		</Grid>
	);
};

export default index;
