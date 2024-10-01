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
import "./utils/socket";
const App = () => {
	return (
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
	);
};

export default App;
