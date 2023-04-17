import { tailbreeze } from "tailbreeze";

const rarityDropdown = tailbreeze({
	size: "w-[230px]",
	background: "bg-zinc-500 hover:bg-zinc-700 focus:bg-zinc-700",
	border: "border-2 border-blue1 hover:border-blue3",
	children: "px-4 flex justify-between items-center",
	// text: "text-white",
});

const rarityDropdownMenu = tailbreeze({
	size: "w-[240px]",
	background: "bg-zinc-700",
	text: "text-zinc-500 focus:text-blue3",
	children: "",
});

const rarityDropdownOption = tailbreeze({
	size: "h-[28px]",
	text: "text-base text-blue6 font-semibold",
	hover: "hover:bg-opacity-20",
});

export { rarityDropdown, rarityDropdownMenu, rarityDropdownOption };
