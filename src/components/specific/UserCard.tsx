import { Stack, Avatar, Typography } from "@mui/material";

const UserCard = () => {
	interface User {
		name: string;
		email: string;
		image?: string;
		bio?: string;
	}

	const userData = localStorage.getItem("user");
	let user;
	if (userData) {
		user = JSON.parse(userData) as User;
	}

	return (
		<Stack sx={styles.container}>
			<Avatar src={user?.image} style={styles.avatar} />
			<Typography variant="h4" style={styles.name}>
				{user?.name}
			</Typography>
			<Typography variant="subtitle1" style={styles.email}>
				{user?.email}
			</Typography>
			<Typography variant="h6" style={styles.bioTitle}>
				Bio
			</Typography>
			<Typography variant="body1" style={styles.bioText}>
				{user?.bio}
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
