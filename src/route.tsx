import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Home from "./pages/Home";
import Chat from "./pages/Chat"; // Home and chat are common routes
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const AdminChat = lazy(() => import("./pages/admin/AdminChat"));
const AdminMessage = lazy(() => import("./pages/admin/AdminMessage"));
const AdminUsers = lazy(() => import("./pages/admin/AdminUsers"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const About = lazy(() => import("./pages/About"));
const Login = lazy(() => import("./pages/Login"));
const Group = lazy(() => import("./pages/group"));

export default createBrowserRouter([
	{ path: "/login", element: <Login /> },
	{
		path: "/",
		element: <Home />,
	},

	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
	},
	{
		path: "/chat/:chatId",
		element: <Chat />,
	},
	{
		path: "/group",
		element: <Group />,
	},
	{
		path: "/admin",
		element: <AdminLogin />,
	},
	{
		path: "/admin/dashboard",
		element: <Dashboard />,
	},
	{
		path: "/admin/chats",
		element: <AdminChat />,
	},
	{
		path: "/admin/messages",
		element: <AdminMessage />,
	},
	{
		path: "/admin/users",
		element: <AdminUsers />,
	},
	{ path: "*", element: <div>404</div> },
]);
