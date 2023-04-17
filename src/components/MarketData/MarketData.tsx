import { useContext } from "react";
import { GlobalContext } from "../App/App";

import { marketSection, listing } from "./MarketData.tbz";

interface MarketDataProps {
	urlName: string;
	rarity: string;
}

export function MarketData({ urlName, rarity }: MarketDataProps) {
	const { background }: any = useContext(GlobalContext);

	return (
		//
		<div>
			<div className={`${marketSection} ${background[rarity]}`}>
				<div className="text-white0">{urlName}</div>
				<div className={listing}>Price 1</div>
				<div className={listing}>Price 2</div>
				<div className={listing}>Price 3</div>
			</div>
		</div>
	);
}
