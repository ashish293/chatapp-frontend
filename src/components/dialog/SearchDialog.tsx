import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Chip, IconButton, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
// import { dummyUserData } from "../../constant/sampleData";
import { UserData } from "../../types/dataType";
import AppDialog from "../layout/Dialog";
import { useGetUsersQuery, useSendRequestMutation } from "../../redux/api/user";
const SearchDialog = ({ onClose }: { onClose: () => void }) => {
	const [byName, setByName] = useState(true);
	const [query, setQuery] = useState({ name: "", email: "" });
	const [sendRequest, sendRequestResult] = useSendRequestMutation();

	const handleAdd = (user: UserData) => {
		sendRequest({ userId: user.id });
		onClose();
	};
	console.log(sendRequestResult);

	const { data } = useGetUsersQuery(query);
	const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.name === "iname") {
			setQuery({ email: "", name: e.target.value });
		} else {
			setQuery({ email: e.target.value, name: "" });
		}
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
				value={query[byName ? "name" : "email"]}
				name={byName ? "iname" : "iemail"}
				onChange={handleQueryChange}
				autoComplete="off"
				fullWidth
			/>
			<Stack spacing={2} sx={{ maxHeight: "40vh", overflowY: "scroll", m: 2, width: 250 }}>
				{data?.data?.map((user) => (
					<Stack key={user.id} direction={"row"} alignItems="center" justifyContent="space-between">
						<Stack direction="row" alignItems="center">
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
