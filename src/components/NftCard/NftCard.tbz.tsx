import { tailbreeze } from "tailbreeze";

const nftCard = tailbreeze({
	layout: "flex flex-col justify-center rounded-2xl hover:z-10",
	margin: "my-1 px-3 pb-2 pt-2",
	responsive: "h-[145px] min-w-[502px] max-w-[502px]",
	background: "bg-blue6 shadow drop-shadow-lg",
	border: "border border-2 hover:border-4",
	animation: "hover:transform hover:ease-in ease-out hover:duration-200 hover:scale-105 ",
	text: "text-white",
});

const imgStyle = tailbreeze({
	position: "w-[70px] h-[70px] rounded-2xl",
	border: "border border-4",
});

const primaryTags = tailbreeze({
	position: "ml-0.5 mt-3 gap-2",
	children: "flex justify-start",
	text: "text-white",
});

const rarityStyle = tailbreeze({
	position: "py-0.5",
	size: "w-24 rounded-lg",
	children: "flex justify-center gap-1",
	text: "tracking-tight text-sm font-semibold text-white",
	background: "bg-opacity-30",
	border: "border border-2",
});

const serialStyle = tailbreeze({
	position: "py-0.5",
	size: "w-28 rounded-lg",
	children: "flex justify-center gap-1",
	text: "tracking-tight text-sm text-white",
	background: "bg-opacity-30",
	border: "border border-2",
});

const nameStyle = tailbreeze({
	position: "ml-2 -mt-1.5",
	text: "text-2xl font-semibold tracking-tight",
});

const defaultTagStyle = tailbreeze({
	position: "py-0.5",
	size: "w-24 rounded-lg",
	children: "flex justify-center gap-1",
	text: "tracking-tight text-sm font-base text-white italic",
	background: "bg-zinc-500 bg-opacity-50",
	border: "border border-2",
});

const buttonGroup = tailbreeze({
	// position: "py-0.5",
	size: "w-full h-[37px]",
	children: "flex gap-10 pl-1.5",
});

const olButton = tailbreeze({
	// position: "py-0.5",
	size: "w-[200px] h-[42px] rounded-md",
	background: "bg-gradient-to-b from-blue6 to-black hover:bg-gradient-to-t",
	border: "rounded-md border border-blue1 hover:border-2 hover:border-blue3",
	children: "flex justify-center items-center gap-3 p-1",
	text: "text-base font-semibold tracking-wide hover:text-blue1",
});

export {
	nftCard,
	rarityStyle,
	primaryTags,
	imgStyle,
	serialStyle,
	nameStyle,
	defaultTagStyle,
	buttonGroup,
	olButton,
};
