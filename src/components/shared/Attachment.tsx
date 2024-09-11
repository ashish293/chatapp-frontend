import CloseIcon from "@mui/icons-material/Close";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { Dialog, IconButton, Stack } from "@mui/material";
import { useState } from "react";

const Attactment = ({ url }: { url: string }) => {
	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(false);
	const handleOpen = () => setOpen(true);
	const fileExt = url?.split(".").pop();
	if (fileExt === "jpg" || fileExt === "png" || fileExt === "jpeg") {
		return (
			<>
				<Dialog
					open={open}
					onClose={handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<Stack direction="row" justifyContent="flex-end" p={1}>
						<IconButton>
							<a href={url} download style={{ color: "inherit" }}>
								<CloudDownloadIcon />
							</a>
						</IconButton>
						<IconButton onClick={handleClose}>
							<CloseIcon />
						</IconButton>
					</Stack>
					<img
						src={url}
						style={{
							maxHeight: "80vh",
							maxWidth: "80vw",
							borderRadius: "10px",
							margin: "5px",
						}}
					/>
				</Dialog>
				<img
					onClick={handleOpen}
					src={url}
					style={{
						maxWidth: "300px",
						maxHeight: "300px",
						borderRadius: "10px",
						margin: "5px",
					}}
				/>
			</>
		);
	} else if (fileExt === "mp4" || fileExt === "mkv" || fileExt === "avi") {
		return (
			<video
				src={url}
				style={{
					maxWidth: "300px",
					maxHeight: "300px",
					borderRadius: "10px",
					margin: "5px",
				}}
				controls
				controlsList="noplaybackrate nopip"
			/>
		);
	} else return null;
};

export default Attactment;
