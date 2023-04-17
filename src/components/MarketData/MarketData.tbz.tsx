import { tailbreeze } from "tailbreeze";

const marketSection = tailbreeze({
	position: "",
	size: "h-10 w-28 rounded-lg",
	children: "flex gap-1",
	background: "bg-opacity-30",
	text: "text-sm",
	border: "shadow drop-shadow-lg",
});

const listing = tailbreeze({
	position: "w-64",
	text: "",
	border: "shadow drop-shadow-lg shadow-opacity-0",
});

export { marketSection, listing };
