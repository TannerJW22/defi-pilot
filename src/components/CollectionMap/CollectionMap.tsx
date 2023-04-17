import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateMyCollection } from "../../store";

import { Container, Row, Col, Card } from "react-bootstrap";
import { GoEye } from "react-icons/go";
import {
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
} from "./CollectionMap.tbz";
import NftCard from "../NftCard/NftCard";
import { localDb_full, localDb } from "../App/App";
import { NftData } from "../../store";

type CollectionCounter = {
	[key: string]: number;
};

// :::
export function CollectionMap() {
	const dispatch = useDispatch();

	const { collection, searchTerm, rarityFilter, categoryFilter, sortFilter } = useSelector(
		({ collection }: any) => {
			return collection;
		},
	);

	let myCollection = useSelector(({ collection: { collection } }: any) => {
		return collection;
	});

	// ------------ Check if Collection Exists & Handle Null Case ------------ //

	if (myCollection === null) {
		const handleDemoClick = () => {
			dispatch(updateMyCollection(localDb.items));
		};

		return (
			<Container className={demoScreenContainer}>
				<img className={bgImage} src="img/bigtime-wallpaper.png" />
				<div className={demoCard}>
					<div className={partnerBanner}>
						<img className={partnerLogo} src="https://openloot.com/images/open-loot-logo.svg" />
						<img
							className={partnerLogo}
							src="https://21044391.fs1.hubspotusercontent-na1.net/hubfs/21044391/New_site/Big%20Time%20Logo.svg"
						/>
						<img
							className={`${partnerLogo} w-[10rem] h-[4.5rem] `}
							src="img/worldshards-logo.png"
						/>
					</div>
					<div className="flex gap-7 px-5 py-3">
						<img className={cardImg} src="img/ol-collection.jpg" />
						<div className={cardBody}>
							<h1 className={cardTitle}>Become a NFT Power User with Defi-Pilot</h1>
							<div className="text-base">
								The <span className="font-semibold italic">DeFi-Pilot Dashboard</span> provides
								real-time data and enhanced tools for organizing, tracking, and profiting from your
								NFT collection.
							</div>
							<button className={demoButton} onClick={handleDemoClick}>
								<GoEye className="h-5 w-5" />
								View Demo
							</button>{" "}
							<div className="text-sm italic">
								*Current version is only compatible <br />
								with Big Time NFT collections.
							</div>
						</div>
					</div>
				</div>
			</Container>
		);
	}

	// ------------ Collection Exists ------------ //

	// ::: Derive totalOwned Stats
	let totalOwnedData: any = {};

	myCollection.map((nft: any, i: number) => {
		if (totalOwnedData[nft.name] === undefined) {
			totalOwnedData[nft.name] = 1;
		} else {
			totalOwnedData[nft.name] = totalOwnedData[nft.name] + 1;
		}
	});

	// ::: Prepare Sorting Logic for Sort Dropdown
	// (its declared here just so it can acccess totalOwnedData but w/e)
	const sortMyCollection = (arr: any, _sortFilter: string) => {
		switch (_sortFilter) {
			case "serial-d":
				arr.sort((a: any, b: any) => b.issuedId - a.issuedId);
				break;
			case "serial-a":
				arr.sort((a: any, b: any) => a.issuedId - b.issuedId);
				break;
			case "owned-d":
				arr.sort((a: any, b: any) => totalOwnedData[b.name] - totalOwnedData[a.name]);
				break;
			case "owned-a":
				arr.sort((a: any, b: any) => totalOwnedData[a.name] - totalOwnedData[b.name]);
				break;
			default:
				return arr;
		}
		return arr;
	};

	// ::: Filter & Sort Collection
	let collectionBuilder = myCollection
		// Search Term Filter
		.filter((nft: NftData) => {
			return nft.name.toLowerCase().includes(searchTerm.toLowerCase());
		})
		// Rarity Dropdown Filter
		.filter((nft: NftData) => {
			return rarityFilter === "all" ? true : nft.rarity === rarityFilter;
		})
		// Category Dropdown Filter
		.filter((nft: NftData) => {
			return categoryFilter === "all" ? true : nft.tags.includes(categoryFilter);
		});
	// Custom Sort Function
	collectionBuilder = sortMyCollection(collectionBuilder, sortFilter);

	// ::: Create NftCard Render
	const renderedItems = collectionBuilder.map((item: NftData, i: number) => {
		return (
			<Col key={i}>
				<NftCard
					key={`${i}-${item.name}`}
					name={item.name}
					serial={item.issuedId}
					img={item.imageUrl}
					rarity={item.rarity}
					maxSupply={item.maxIssuance}
					status={item.status}
					urlName={item.optionName}
					collectionTag={item.collection}
					tags={item.tags}
					totalOwned={totalOwnedData[item.name]}
				/>
			</Col>
		);
	});

	return (
		<Container fluid className={collectionMap}>
			<Row>{renderedItems}</Row>
		</Container>
	);
}
