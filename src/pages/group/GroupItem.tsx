import { Avatar, Badge, Box, Grid, Typography, alpha } from "@mui/material";
import type { GroupItemProps } from "../../types/propsType";
import { memo } from "react";

const GroupItem = ({ data, selectedGroup, setGroup }: GroupItemProps) => {
	const handleClick = () => setGroup(data);
	return (
		<Grid container sx={styles.container(data?.id == selectedGroup?.id)} onClick={handleClick}>
			<Grid item xs={2}>
				<Avatar src={data.image} sx={styles.avatar} alt={data.name} />
			</Grid>
			<Grid item xs={10} sx={{ paddingLeft: 1 }}>
				<Typography variant="subtitle2" fontWeight={500} style={styles.ellipsis}>
					{data.name}
				</Typography>
			</Grid>
		</Grid>
	);
};

export default memo(GroupItem);

const styles = {
	container: (selected: boolean) => ({
		alignItems: "center",
		borderRadius: "4px",
		backgroundColor: selected ? alpha("#f5f5f5", 0.8) : "transparent",
		"&:hover": {
			backgroundColor: "#f5f5f5",
		},
		padding: 0.8,
	}),
	avatar: {
		width: "100%",
		height: "100%",
		border: "0.5px solid green",
	},
	ellipsis: {
		overflow: "hidden",
		textOverflow: "ellipsis",
		whiteSpace: "nowrap",
	},
};
