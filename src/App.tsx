import { RouterProvider } from "react-router-dom";
import router from "./route";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./config/theme";
import { HelmetProvider } from "react-helmet-async";
import { CssBaseline } from "@mui/material";
import { Suspense } from "react";
import Loader from "./components/layout/Loader";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import { io } from "socket.io-client";

const App = () => {
	const socket = io("http://localhost:9000");
	socket.on("connect", () => {
		console.log(socket.id); // x8WIv7-mJelg7on_ALbx
	});
	return (
		<CookiesProvider>
			<HelmetProvider>
				<CssBaseline />
				<Provider store={store}>
					<ThemeProvider theme={theme}>
						<Suspense fallback={<Loader />}>
							<RouterProvider router={router} />
						</Suspense>
					</ThemeProvider>
				</Provider>
			</HelmetProvider>
		</CookiesProvider>
	);
};

export default App;
