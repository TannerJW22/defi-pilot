import axios from "axios";

export class MarketDataController {
	static async getMarketData(urlId) {
		let marketSnapshot = {
			listings: [],
			totalItems: null,
		};

		const raw = await axios.get(
			`https://openloot.com/api/v2/market/listings/${urlId}/open-orders?page=1&pageSize=50&sort=price%3Aasc`,
			{
				//
			},
		);

		// Update listings array
		for (let i = 0; i < 3; ++i) {
			marketSnapshot.listings?.push({
				serial: raw.data.items[i].item.issuedId,
				price: raw.data.items[i].price,
			});
		}

		// Update totalItems quantity
		marketSnapshot.totalItems = raw.data.totalItems;

		console.log(marketSnapshot); // <<--*
		return marketSnapshot;
	}
}

// MarketDataController.getMarketData("BT0_space_exalted_small_0"); // <<--|
