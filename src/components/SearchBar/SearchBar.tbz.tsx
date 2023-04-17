import { tailbreeze } from "tailbreeze";

const searchBar = tailbreeze({
	size: "w-[230px]",
	children: "flex flex-col",
});

const input = tailbreeze({
	size: "h-full min-w-[160px]",
	layout: "p-2 rounded focus:ring-0",
	background: "bg-zinc-500 hover:bg-zinc-700 focus:bg-zinc-700 active:bg-zinc-500",
	border: "border-2 hover:border-blue3 focus:border-blue3",
	text: "text-white placeholder-white",
});

const searchButton = tailbreeze({
	background: "bg-blue5",
	size: "min-w-[20px] -ml-2",
	border: "rounded-md border border-blue1 hover:border-2 hover:border-blue3",
	text: "font-semibold text-white whitespace-nowrap hover:text-blue0 active:text-blue3",
	children: "flex justify-center items-center gap-3",
});

const searchIcon = tailbreeze({
	layout: "w-4 h-4",
});

export { searchBar, input, searchButton, searchIcon };
