import { Cookies } from "react-cookie";
import { Navigate } from "react-router-dom";

type Props = {
	children: React.ReactNode;
};

const ProtectedRoute: React.FC<Props> = ({ children }) => {
	const authToken = new Cookies().get("chat-token");
	return !!authToken ? children : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
