import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
	const [secret, setSecret] = useState("");
	const navigation = useNavigate();
	const handleSubmit = () => {
		console.log(secret);
		navigation("/admin/dashboard");
	};
	return (
		<Container
			sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}
			maxWidth="xs"
			component={"main"}
		>
			<Paper sx={{ padding: 2 }}>
				<Typography variant="h3" sx={{ marginBottom: 2 }} textAlign="center">
					Admin Login
				</Typography>
				<TextField
					label="Secret"
					value={secret}
					onChange={(e) => setSecret(e.target.value)}
					fullWidth
				/>
				<Button
					onClick={handleSubmit}
					variant="contained"
					color="primary"
					fullWidth
					sx={{ marginTop: 2 }}
				>
					Login
				</Button>
			</Paper>
		</Container>
	);
};

export default AdminLogin;
