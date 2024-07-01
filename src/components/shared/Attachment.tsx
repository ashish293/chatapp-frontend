import { Box, Dialog, IconButton, Modal, Stack } from "@mui/material";
import { AttachmentData } from "../../types/dataType";
import { useState } from "react";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import CloseIcon from "@mui/icons-material/Close";

const Attactment = ({ data }: { data: AttachmentData }) => {
	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(false);
	const handleOpen = () => setOpen(true);
	const fileExt = data.url.split(".").pop();
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
							<a href={data.url} download style={{ color: "inherit" }}>
								<CloudDownloadIcon />
							</a>
						</IconButton>
						<IconButton onClick={handleClose}>
							<CloseIcon />
						</IconButton>
					</Stack>
					<img
						src={data.url}
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
					src={data.url}
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
				src={data.url}
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
