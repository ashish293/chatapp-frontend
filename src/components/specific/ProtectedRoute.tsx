import { Navigate } from "react-router-dom";

type Props = {
	children: React.ReactNode;
};

const ProtectedRoute: React.FC<Props> = ({ children }) => {
	const authToken = document.cookie
		.split("; ")
		.find((row) => row.startsWith("authToken="))
		?.split("=")[1];
	return !!authToken ? children : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
