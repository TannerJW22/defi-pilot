import { tailbreeze } from "tailbreeze";

const configPanel = tailbreeze({
	size: "w-1/6 min-w-[290px] pt-[16vh]",
	background: "bg-zinc-950",
	border: "shadow shadow-zinc-500 drop-shadow-lg",
	children: "flex flex-col items-center gap-7 py-7 px-5",
	// x: "border-4 border-blue-500",
});

export { configPanel };
