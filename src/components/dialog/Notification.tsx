import { Button, ButtonGroup, Stack, Typography } from "@mui/material";
import AppDialog from "../layout/Dialog";
import { useAcceptRequestMutation, useGetRequestsQuery } from "../../redux/api/user";

const Notifications = ({ onClose }: { onClose: () => void }) => {
	const { data } = useGetRequestsQuery();
	const [acceptRequest, result] = useAcceptRequestMutation();
	const handleAccept = (id: string) => {
		acceptRequest({ requestId: id });
		onClose();
	};
	return (
		<>
			{data?.data?.map((request) => (
				<Stack key={request.id} direction="row" alignItems="center" justifyContent="space-between">
					<Typography variant="body2">{request.sender.name} sent you friend request</Typography>
					<ButtonGroup>
						<Button variant="text" color="primary" onClick={() => handleAccept(request.id)}>
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
