import {
	Avatar,
	Button,
	ButtonGroup,
	IconButton,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { dummyUserData } from "../../constant/sampleData";
import AppDialog from "../layout/Dialog";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

const NewGroup = ({ onClose }: { onClose: () => void }) => {
	const handleAdd = (user: any) => {
		console.log("Add User", user);
	};
	return (
		<>
			<TextField label="Group Name" fullWidth />
			<Stack spacing={2} sx={{ maxHeight: "40vh", overflowY: "scroll", m: 2 }}>
				{dummyUserData.map((user) => (
					<Stack
						key={user.id}
						direction={"row"}
						alignItems="center"
						justifyContent="space-between"
					>
						<Stack direction="row" alignItems="center" width={250}>
							<Avatar src={user.image} sx={{ marginRight: 2 }} sizes="small" />
							<Typography>{user.name}</Typography>
						</Stack>
						<IconButton onClick={handleAdd.bind(this, user)}>
							<AddCircleRoundedIcon color="primary" />
						</IconButton>
					</Stack>
				))}
			</Stack>
			<ButtonGroup fullWidth>
				<Button variant="text" color="error" onClick={onClose}>
					Cancel
				</Button>
				<Button variant="text" color="secondary">
					Create
				</Button>
			</ButtonGroup>
		</>
	);
};

export default AppDialog(NewGroup, "New Group");
