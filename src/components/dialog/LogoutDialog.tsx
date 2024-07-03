import { Button, ButtonGroup, Typography } from "@mui/material";
import toast from "react-hot-toast";
import { redirect, useNavigate } from "react-router-dom";
import Api from "../../utils/Api";
import AppDialog from "../layout/Dialog";

const LogoutDialog = ({ onClose }: { onClose: () => void }) => {
	const navigate = useNavigate();
	const handleLogout = async () => {
		try {
			const res = await Api.post("/user/logout", {}, { withCredentials: true });
			if (res.data.success) {
				navigate("/login");
			} else {
				toast.error(res.data?.message || "Something went wrong");
			}
		} catch (error: any) {
			toast.error(error?.response?.data?.message || "Something went wrong");
		}
	};
	return (
		<>
			<Typography>Are you sure you want to logout?</Typography>
			<ButtonGroup>
				<Button variant="text" color="primary" onClick={onClose}>
					No
				</Button>
				<Button variant="text" color="error" onClick={handleLogout}>
					Yes
				</Button>
			</ButtonGroup>
		</>
	);
};

export default AppDialog(LogoutDialog, "LogoutDialog");
