import { tailbreeze } from "tailbreeze";

const uploadModal = tailbreeze({
	size: "w-5/6 h-5/6",
});

const body = tailbreeze({
	children: "flex flex-col pl-10 justify-center gap-4",
});

const textArea = tailbreeze({
	background: "hover:bg-zinc-100 focus:bg-zinc-100",
	position: "min-h-[100px] my-4 mx-auto p-3",
	border: "shadow drop-shadow-md outline-none focus:outline-blue3",
});

const uploadButton = tailbreeze({
	background: "bg-gradient-to-b from-blue4 to-blue5 hover:bg-gradient-to-t",
	size: "min-w-[140px] h-[45px]",
	border: "rounded-md border border-blue1 hover:border-2 hover:border-blue3",
	text: "font-semibold text-lg text-white whitespace-nowrap tracking-wide hover:text-blue0 active:text-blue3",
	children: "flex justify-center items-center gap-3",
});

const cancelButton = tailbreeze({
	background: "bg-zinc-100 hover:bg-zinc-500 shadow drop-shadow-md",
	size: "min-w-[140px] h-[45px]",
	border: "border-2 border-zinc-500 hover:border-zinc-600",
	text: "font-semibold text-lg text-zinc-700 whitespace-nowrap hover:text-white active:text-white",
	children: "flex justify-center items-center gap-3",
});

export { uploadModal, body, textArea, uploadButton, cancelButton };
