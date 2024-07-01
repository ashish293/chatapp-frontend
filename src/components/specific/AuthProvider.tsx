import React from "react";
import { Navigate } from "react-router-dom";

type Props = {
	children: React.ReactNode;
};

const AuthProvider: React.FC<Props> = ({ children }) => {
	const authToken = document.cookie
		.split("; ")
		.find((row) => row.startsWith("authToken="))
		?.split("=")[1];

	if (!authToken) {
		return <Navigate to={"/login"} />;
	}
	return children;
};

export default AuthProvider;
