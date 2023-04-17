import { tailbreeze } from "tailbreeze";

const demoScreenContainer = tailbreeze({
	size: "-ml-4 grow min-w-[105%]",
	background: "bg-zinc-950",
	// x: "border-4 border-red-500 ",
});

const collectionMap = tailbreeze({
	layout: "w-5/6 pl-6 py-4 min-w-[60rem] min-h-screen",
	background: "bg-blue1",
	children: "relative",
});

const demoCard = tailbreeze({
	size: "h-[28rem] w-[48rem] px-1 z-10",
	placement: "absolute top-[5%] left-[18%] xl:left-[28%] 2xl:left-[32%]",
	background: "bg-blue6",
	border: "shadow shadow-zinc-600 drop-shadow-2xl rounded",
	children: "flex flex-col gap-2.5",
});

const partnerBanner = tailbreeze({
	size: "h-[4rem]",
	layout: "mt-4 mx-5 px-3",
	background: "bg-blue5 rounded",
	children: "flex justify-around items-center gap-3",
	border: "shadow shadow-zinc-600 drop-shadow-md",
});

const partnerLogo = tailbreeze({
	// x: "border-2 border-red-500",
	size: "h-full",
	layout: "p-3",
});

const cardImg = tailbreeze({
	border: "shadow drop-shadow-md rounded",
	size: "h-full w-[60%] z-30",
});

const cardBody = tailbreeze({
	// x: "border-2 border-blue-500",
	size: "w-[40%]",
	layout: "",
	children: "flex flex-col gap-4",
});

const cardTitle = tailbreeze({
	text: "text-2xl font-bold",
});

const cardText = tailbreeze({
	x: "",
});

const demoButton = tailbreeze({
	layout: "my-2.5 ml-4",
	background: "bg-zinc-200 hover:bg-blue4 ",
	size: "h-[2.8rem] w-[12rem] rounded-lg",
	border: "border-2 border-blue5 hover:border-2 hover:border-blue3 shadow drop-shadow-md",
	text: "font-semibold text-lg text-blue6 whitespace-nowrap hover:text-blue0 active:text-blue3",
	children: "flex justify-center items-center gap-3",
});

const bgImage = tailbreeze({
	size: "bg-cover object-fill min-h-[102%] min-w-[100%]",
	position: " -mt-0.5 opacity-50",
});

export {
	demoScreenContainer,
	collectionMap,
	demoCard,
	partnerBanner,
	partnerLogo,
	cardBody,
	cardImg,
	cardTitle,
	demoButton,
	bgImage,
};
