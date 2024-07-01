import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Toaster />
		<div onContextMenu={(e) => e.preventDefault()}>
			<App />
		</div>
	</React.StrictMode>
);
