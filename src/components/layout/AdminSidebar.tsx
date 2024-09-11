import { Stack, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import options from "../../constant/sidebarOptions";
import { Link } from "../style/StyledComponent";

const AdminSidebar = () => {
	const route = useLocation();
	return (
		<Stack bgcolor={"#eee"} p={2}>
			{options.map((option, index) => (
				<Link key={index} to={option.link}>
					<Stack
						direction="row"
						spacing={2}
						bgcolor={route.pathname === option.link ? "black" : "inherit"}
						color={route.pathname === option.link ? "white" : "inherit"}
						alignItems="center"
						borderRadius={100}
						p={1}
					>
						{option.icon}
						<Typography>{option.name}</Typography>
					</Stack>
				</Link>
			))}
		</Stack>
	);
};

export default AdminSidebar;
