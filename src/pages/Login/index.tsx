import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { useFormik } from "formik";
import { validate } from "./validator";
import { useState } from "react";
import MyTextField from "./MyTextField";
import Api from "../../utils/Api";
import toast from "react-hot-toast";
import { Cookies } from "react-cookie";
import { Navigate, redirect, useNavigate } from "react-router-dom";

const Login = () => {
	const authToken = new Cookies().get("chat-token");
	if (authToken) {
		return <Navigate to={"/"} />;
	}
	const navigate = useNavigate();

	const onSubmit = async (values: any, { setSubmitting }: { setSubmitting: any }) => {
		const url = isLogin ? "/user/signin" : "/user/signup";
		try {
			const res = await Api.post(url, values, {
				headers: { "Content-Type": "application/json" },
				withCredentials: true,
			});
			if (res.data.success) {
				localStorage.setItem("token", res.data.token);
				setSubmitting(false);
				navigate("/");
			}
		} catch (error: any) {
			console.log(error);
			toast.error(error.response.data.message);
			setSubmitting(false);
		}
	};
	const [isLogin, setIsLogin] = useState(true);
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
		},
		validate: (values) => validate(values, isLogin),
		onSubmit: onSubmit,
	});

	const toggleSignIn = () => {
		formik.resetForm();
		setIsLogin(!isLogin);
	};

	return (
		<div>
			<Container
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
					flexDirection: "column",
				}}
				maxWidth="xs"
				component={"main"}
			>
				<Typography variant="h3" color={"primary.main"}>
					Earth
				</Typography>
				<Typography variant="caption" sx={{ marginBottom: 2 }}>
					A modern way to chat
				</Typography>
				<Paper sx={{ padding: 2, border: "2px solid", borderColor: "primary.main" }}>
					<Typography variant="h5" sx={{ marginBottom: 2 }}>
						{isLogin ? "Login" : "Sign Up"}
					</Typography>

					<form onSubmit={formik.handleSubmit}>
						{!isLogin && <MyTextField name="name" formik={formik} />}
						<MyTextField name="email" formik={formik} />
						<MyTextField name="password" formik={formik} />
						<Button
							type="submit"
							variant="contained"
							color="primary"
							disabled={formik.isSubmitting}
							fullWidth
							sx={{ marginTop: 2 }}
						>
							{isLogin ? "Login" : "Sign Up"}
						</Button>
					</form>
					{isLogin && (
						<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
							<Button onClick={toggleSignIn} sx={{ color: "black" }}>
								Forget password?
							</Button>
						</Box>
					)}
					<Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
						<Button color="primary" onClick={toggleSignIn}>
							{isLogin ? "Create an account" : "Sign in instead"}
						</Button>
					</Box>
				</Paper>
			</Container>
		</div>
	);
};

export default Login;
