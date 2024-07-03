import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import ProtectedRoute from "./components/specific/ProtectedRoute";
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
		element: (
			<ProtectedRoute>
				<Home />
			</ProtectedRoute>
		),
	},

	{
		path: "/about",
		element: (
			<ProtectedRoute>
				<About />
			</ProtectedRoute>
		),
	},
	{
		path: "/dashboard",
		element: (
			<ProtectedRoute>
				<Dashboard />
			</ProtectedRoute>
		),
	},
	{
		path: "/chat/:chatId",
		element: (
			<ProtectedRoute>
				<Chat />
			</ProtectedRoute>
		),
	},
	{
		path: "/group",
		element: (
			<ProtectedRoute>
				<Group />
			</ProtectedRoute>
		),
	},
	{
		path: "/admin",
		element: (
			<ProtectedRoute>
				<AdminLogin />
			</ProtectedRoute>
		),
	},
	{
		path: "/admin/dashboard",
		element: (
			<ProtectedRoute>
				<Dashboard />
			</ProtectedRoute>
		),
	},
	{
		path: "/admin/chats",
		element: (
			<ProtectedRoute>
				<AdminChat />
			</ProtectedRoute>
		),
	},
	{
		path: "/admin/messages",
		element: (
			<ProtectedRoute>
				<AdminMessage />
			</ProtectedRoute>
		),
	},
	{
		path: "/admin/users",
		element: (
			<ProtectedRoute>
				<AdminUsers />
			</ProtectedRoute>
		),
	},
	{ path: "*", element: <div>404</div> },
]);
