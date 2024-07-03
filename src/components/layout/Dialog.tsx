import { Container, Dialog, Typography } from "@mui/material";

type AppDialogType = (
	InnerComponent: React.ComponentType<any>,
	title: string
) => ({ onClose }: { onClose: () => void }) => JSX.Element;

const AppDialog: AppDialogType =
	(InnerComponent, title) =>
	({ onClose }) =>
		(
			<Dialog open onClose={onClose}>
				<Container sx={{ p: 2 }}>
					<Typography variant="h6" mb={2}>
						{title}
					</Typography>
					<InnerComponent onClose={onClose} />
				</Container>
			</Dialog>
		);

export default AppDialog;
