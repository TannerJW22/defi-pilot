import { useContext } from "react";
import { useSelector } from "react-redux";
import { GlobalContext } from "../App/App";
import { MarketData } from "../MarketData/MarketData";

import { Row, Card } from "react-bootstrap";
import { BsFillDiamondFill } from "react-icons/bs";

import "./NftCard.css";

import {
	nftCard,
	rarityStyle,
	imgStyle,
	serialStyle,
	nameStyle,
	primaryTags,
	defaultTagStyle,
	buttonGroup,
	olButton,
} from "./NftCard.tbz";

import { toTitleCase } from "../../utils/misc-functions";

type ParsedListing = {
	price: number;
	issuedId: number;
};

type MarketSnapshot = ParsedListing[];

interface NftCardProps {
	key: any;
	name: string;
	serial: number;
	img: string;
	rarity: string;
	maxSupply: number;
	status: string;
	urlName: string;
	collectionTag: string;
	tags: string[];
	totalOwned: number;
}

// :::
export default function NftCard({ ...NftCardProps }: NftCardProps) {
	const { border, background }: any = useContext(GlobalContext);
	const { name, serial, img, rarity, maxSupply, status, urlName, collectionTag, tags, totalOwned } =
		NftCardProps;

	const openLootLink = `https://openloot.com/items/${collectionTag}/${urlName}`;

	const getStatusText = (status: string): string => {
		switch (status) {
			case "unlocked":
				return "In Open Loot Vault";
				break;
			case "in-game":
				return "In-Game Inventory";
				break;
			case "locked":
				return "Listed for Sale";
				break;
			default:
				return "Error Locating Status";
		}
	};

	return (
		<Card
			onClick={() => ""}
			style={{ width: "95%", height: "98%" }}
			className={`${nftCard} ${border[rarity]} swing-in-top-fwd`}
		>
			<div className={primaryTags}>
				<div className={`${rarityStyle} ${background[rarity]}`}>{toTitleCase(rarity)}</div>
				<div className={`${serialStyle} ${background[rarity]}`}>
					<span className="font-bold">#{serial} </span>
					<span className="text-xs mt-0.5"> / {maxSupply}</span>
				</div>
				<div className={`${defaultTagStyle}`}>{`${totalOwned} Owned`}</div>
				<div className={`${defaultTagStyle} w-36`}>{getStatusText(status)}</div>
			</div>
			<Card.Body className="-mt-1 -ml-3.5 flex gap-4">
				<Card.Img className={`${imgStyle} ${border[rarity]}`} src={img} />
				<div className="flex flex-col w-full">
					<Card.Title className={nameStyle}>{name}</Card.Title>
					{/* <MarketData urlName={urlName} rarity={rarity} /> */}
					<div className={buttonGroup}>
						<a href={openLootLink}>
							<button className={olButton}>
								<img className="h-[28px]" src="/img/open-loot-logo.png" alt="open-loot-logo" />
								View Listings
							</button>
						</a>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
}
