import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";

const Link = styled(LinkComponent)`
	text-decoration: none;
	color: black;
	text-decoration: none;
`;
const VisuallyHiddenInput = styled("input")({
	clip: "rect(0 0 0 0)",
	clipPath: "inset(50%)",
	height: 1,
	overflow: "hidden",
	position: "absolute",
	bottom: 0,
	left: 0,
	whiteSpace: "nowrap",
	width: 1,
});

export { Link, VisuallyHiddenInput };
