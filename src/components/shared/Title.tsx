import { Helmet } from "react-helmet-async";

const Title = ({ title = "Earth", description = "A modern chat app" }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
		</Helmet>
	);
};

export default Title;
