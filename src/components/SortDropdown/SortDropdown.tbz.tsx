import { tailbreeze } from "tailbreeze";

const sortDropdown = tailbreeze({
	size: "w-[230px]",
	background: "bg-zinc-500 hover:bg-zinc-700 focus:bg-zinc-700",
	border: "border-2 border-blue1 hover:border-blue3",
	children: "px-4 flex justify-between items-center",
});

const sortDropdownMenu = tailbreeze({
	size: "w-[240px]",
	background: "bg-zinc-700",
	text: "text-zinc-500 focus:text-blue3",
});

const sortDropdownOption = tailbreeze({
	size: "h-[28px]",
	text: "text-base text-white text-blue6",
	hover: "hover:bg-opacity-20 hover:bg-zinc-300",
});

export { sortDropdown, sortDropdownMenu, sortDropdownOption };
