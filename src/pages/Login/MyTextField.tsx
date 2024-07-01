import { TextField, Typography } from "@mui/material";

const MyTextField = ({ name, formik }: { name: string; formik: any }) => {
	return (
		<>
			<TextField
				fullWidth
				name={name}
				id={name}
				label={name.charAt(0).toUpperCase() + name.slice(1)}
				value={formik.values[name]}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				sx={{ marginTop: 2 }}
			/>
			<Typography variant="caption" color={"error"} sx={{ margin: 1 }}>
				{formik.touched[name] && formik.errors[name]}
			</Typography>
		</>
	);
};
export default MyTextField;
