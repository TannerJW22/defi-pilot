import { tailbreeze } from "tailbreeze";

// :::
const navHeader = tailbreeze({
	layout: "py-2 pr-4",
	dimensions: "h-24 w-full",
	background: "bg-blue6",
	children: "flex flex-row items-center",
});

// :::
const navLogo = tailbreeze({
	layout: "flex justify-center mr-auto ml-12 pr-5",
	dimensions: "h-[5rem] min-w-[280px]",
	background: "bg-blue6",
});

// :::
const navButtonDiv = tailbreeze({
	layout: "flex justify-center ml-auto mr-16 w-1/2 h-1/2 gap-16 min-w-[500px]",
	background: "bg-blue6",
	// x: "border-2 border-red-500",
});

// :::
const uploadButton = tailbreeze({
	background: "bg-gradient-to-b from-blue4 to-blue5 hover:bg-gradient-to-t",
	size: "min-w-[240px] h-[45px]",
	border: "rounded-md border border-blue1 hover:border-2 hover:border-blue3",
	text: "font-semibold text-lg text-white whitespace-nowrap tracking-wide hover:text-blue0 active:text-blue3",
	children: "flex justify-center items-center gap-3",
});

// :::
const uploadIcon = tailbreeze({
	layout: "w-5 h-5",
});

export { navHeader, navLogo, navButtonDiv, uploadButton, uploadIcon };
