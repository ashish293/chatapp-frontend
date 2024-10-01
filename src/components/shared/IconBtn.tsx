import { IconButton, Tooltip } from "@mui/material";

type IconBtnProps = {
	title: string;
	icon: any;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const IconBtn = ({ title, icon, onClick }: IconBtnProps) => {
	return (
		<Tooltip title={title}>
			<IconButton color="inherit" size="large" aria-label={title} onClick={onClick}>
				{icon}
			</IconButton>
		</Tooltip>
	);
};

export default IconBtn;
