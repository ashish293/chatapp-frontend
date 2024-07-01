import { Box, Drawer, Grid, IconButton, Typography } from "@mui/material";
import AdminSidebar from "./AdminSidebar";
import { useState } from "react";
import { Link } from "../style/StyledComponent";
import MenuIcon from "@mui/icons-material/Menu";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
	const [open, setOpen] = useState(false);
	const handleOpenMenu = () => setOpen(true);
	return (
		<Grid container>
			<Grid
				item
				sm={2}
				xs={0}
				display={{ xs: "none", sm: "flex" }}
				bgcolor="#eee"
				height="100vh"
				alignItems={"center"}
			>
				<AdminSidebar />
			</Grid>
			<Grid item sm={10} xs={12} sx={{ height: "100vh", overflowY: "auto" }}>
				<Box sx={{ display: { xs: "flex", sm: "none" }, justifyContent: "flex-end" }}>
					<IconButton size="large" aria-label="menu" onClick={handleOpenMenu} color="inherit">
						<MenuIcon />
					</IconButton>
				</Box>
				<Drawer open={open} onClose={() => setOpen(false)}>
					<Box width={"80vw"} bgcolor="#eee" height="100vh">
						<Link to={"/"}>
							<Typography variant="h5" color="primary" textAlign="center" mt={1}>
								Earth
							</Typography>
						</Link>
						<AdminSidebar />
					</Box>
				</Drawer>
				{children}
			</Grid>
		</Grid>
	);
};

export default AdminLayout;
