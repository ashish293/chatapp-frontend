import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Chip, IconButton, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { dummyUserData } from "../../constant/sampleData";
import { UserData } from "../../types/dataType";
import AppDialog from "../layout/Dialog";
const SearchDialog = ({ onClose }: { onClose: () => void }) => {
	const [byName, setByName] = useState(true);
	// const [userList, setUserList] = useState<UserData[]>([]);

	// setUserList(dummyUserData);

	const handleAdd = (user: UserData) => {
		onClose();
		console.log("Add User", user);
	};

	return (
		<>
			<Stack direction="row" my={2} spacing={1}>
				<Chip
					label="By Name"
					onClick={() => setByName(true)}
					color={byName ? "primary" : "default"}
				/>
				<Chip
					label="By Email"
					onClick={() => setByName(false)}
					color={!byName ? "primary" : "default"}
				/>
			</Stack>
			<TextField
				label={byName ? "Name" : "Email"}
				InputProps={{
					endAdornment: <SearchIcon />,
				}}
				fullWidth
			/>
			<Stack spacing={2} sx={{ maxHeight: "40vh", overflowY: "scroll", m: 2 }}>
				{dummyUserData.map((user) => (
					<Stack
						key={user.userId}
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
		</>
	);
};

export default AppDialog(SearchDialog, "Search");
