import { Avatar, Box, IconButton, Stack, TextField, Typography } from "@mui/material";
import type { GroupInfo } from "../../types/dataType";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { dummyUserData } from "../../constant/sampleData";

const ManageGroup = ({ data }: { data: GroupInfo }) => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Typography variant="h4" fontWeight={500} sx={{ mb: 2 }}>
				Manage Group
			</Typography>
			<Avatar src={data.image} sx={{ width: 100, height: 100 }} alt={data.name} />
			<TextField label="Group Name" size="small" sx={{ my: 2 }} value={data.name} />
			<Box maxHeight={300} sx={{ overflowY: "scroll" }}>
				{dummyUserData.map((user, index) => (
					<Stack
						key={index}
						direction={"row"}
						alignItems="center"
						justifyContent="space-between"
						p={1}
					>
						<Stack direction="row" alignItems="center" width={250}>
							<Avatar src={user.image} sx={{ marginRight: 2 }} sizes="small" />
							<Typography>{user.name}</Typography>
						</Stack>
						<IconButton onClick={() => {}}>
							<AddCircleRoundedIcon color="primary" />
						</IconButton>
					</Stack>
				))}
			</Box>
		</Box>
	);
};

export default ManageGroup;
