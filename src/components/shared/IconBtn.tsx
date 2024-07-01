import { IconButton, Tooltip } from "@mui/material";

const IconBtn = ({ title, icon, onClick }: { title: string; icon: any; onClick: () => void }) => {
	return (
		<Tooltip title={title}>
			<IconButton color="inherit" size="large" aria-label={title} onClick={onClick}>
				{icon}
			</IconButton>
		</Tooltip>
	);
};

export default IconBtn;
