import { Button, ButtonGroup, Stack, Typography } from "@mui/material";
import { dummyNotificationData } from "../../constant/sampleData";
import AppDialog from "../layout/Dialog";

const Notifications = () => {
	return (
		<>
			{dummyNotificationData.map((notification) => (
				<Stack
					key={notification.id}
					direction="row"
					alignItems="center"
					justifyContent="space-between"
				>
					<Typography variant="body2">{notification.name} sent you friend request</Typography>
					<ButtonGroup>
						<Button variant="text" color="primary">
							Accept
						</Button>
						<Button variant="text" color="error">
							Reject
						</Button>
					</ButtonGroup>
				</Stack>
			))}
		</>
	);
};

export default AppDialog(Notifications, "Notifications");
