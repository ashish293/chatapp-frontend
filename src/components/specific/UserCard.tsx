import { Stack, Avatar, Typography } from "@mui/material";
import { getLocalUser } from "../../utils/utility";

const UserCard = () => {
	const currentUser = getLocalUser();

	return (
		<Stack sx={styles.container}>
			<Avatar src={currentUser?.image} style={styles.avatar} />
			<Typography variant="h4" style={styles.name}>
				{currentUser?.name}
			</Typography>
			<Typography variant="subtitle1" style={styles.email}>
				{currentUser?.email}
			</Typography>
			<Typography variant="h6" style={styles.bioTitle}>
				Bio
			</Typography>
			<Typography variant="body1" style={styles.bioText}>
				{currentUser?.bio}
			</Typography>
		</Stack>
	);
};

export default UserCard;
const styles = {
	container: {
		height: "100%",
		backgroundColor: "#C73659",
		color: "white",
		alignItems: "center",
		paddingTop: 8,
	},
	avatar: {
		marginBottom: 8,
		height: 100,
		width: 100,
	},
	name: {
		margin: 4,
	},
	email: {
		margin: 4,
	},
	bioTitle: {
		marginTop: 8,
		marginBottom: 4,
	},
	bioText: {
		// Add any additional styles for the bio text here
	},
};
