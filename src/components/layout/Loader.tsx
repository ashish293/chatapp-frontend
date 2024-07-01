import { Box, Container } from "@mui/material";
import { BallTriangle } from "react-loader-spinner";
import { useTheme } from "@mui/material/styles";

const Loader = () => {
	const theme = useTheme();

	return (
		<Container
			sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}
		>
			<BallTriangle
				height={100}
				width={100}
				radius={5}
				color={theme.palette.primary.main}
				ariaLabel="ball-triangle-loading"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
			/>
		</Container>
	);
};

export default Loader;
