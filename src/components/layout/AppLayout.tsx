import { Box, Drawer, Grid, Typography } from "@mui/material";
import Title from "../shared/Title";
import Header from "./Header";
import ChatList from "../shared/ChatList";
import UserCard from "../specific/UserCard";
import { useState } from "react";
import { Link } from "../style/StyledComponent";

const AppLayout = (WrappedComponent: React.ComponentType<any>) => (props: any) => {
	const [open, setOpen] = useState(innerWidth < 600);
	const openDrawer = () => setOpen(true);
	const closeDrawer = () => setOpen(false);
	return (
		<>
			<Title />
			<Box sx={{ display: "flex", height: "100vh", flexDirection: "column" }}>
				<Header openDrawer={openDrawer} />
				<Drawer
					open={open}
					onClose={() => {
						setOpen(false);
					}}
				>
					<Box width={"80vw"}>
						<Link to={"/"}>
							<Typography variant="h5" color="primary" textAlign="center" mt={1}>
								Earth
							</Typography>
						</Link>
						<ChatList closeDrawer={closeDrawer} />
					</Box>
				</Drawer>
				<Grid container sx={{ height: "calc(100vh - 4rem)" }}>
					<Grid item sm={4} md={3} sx={{ display: { xs: "none", sm: "block" } }}>
						<ChatList closeDrawer={closeDrawer} />
					</Grid>
					<Grid item xs={12} sm={8} md={6} lg={7} sx={{ height: "100%" }}>
						<WrappedComponent {...props} />
					</Grid>
					<Grid item md={3} lg={2} sx={{ display: { xs: "none", md: "block" } }}>
						<UserCard />
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default AppLayout;
