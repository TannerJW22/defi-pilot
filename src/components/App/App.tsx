import { useState, createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
// Styles
import "bulma/css/bulma.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles.css";
import heroDiv from "./App.tbz";

// Functional Components
import { UploadModal } from "../UploadModal/UploadModal";
import { NavHeader } from "../NavHeader/NavHeader";
import { ConfigPanel } from "../ConfigPanel/ConfigPanel";
import { CollectionMap } from "../CollectionMap/CollectionMap";

import { FiUpload } from "react-icons/fi";

import { localDb } from "../../utils/local-db";

// ------------ Global Context ------------ //

interface ValueProps {
	border: object;
	background: object;
	text: object;
}

export const GlobalContext = createContext<ValueProps>({
	border: {},
	background: {},
	text: {},
});

function App() {
	const [value, setValue] = useState({
		border: {
			common: "border-common",
			uncommon: "border-uncommon",
			rare: "border-rare",
			epic: "border-epic",
			legendary: "border-legendary",
			mythic: "border-mythic",
			exalted: "border-exalted",
		},
		background: {
			common: "bg-common",
			uncommon: "bg-uncommon",
			rare: "bg-rare",
			epic: "bg-epic",
			legendary: "bg-legendary",
			mythic: "bg-mythic",
			exalted: "bg-exalted",
		},
		text: {
			common: "text-common font-semibold",
			uncommon: "text-uncommon font-semibold",
			rare: "text-rare font-semibold",
			epic: "text-epic font-semibold",
			legendary: "text-legendary font-semibold",
			mythic: "text-mythic font-semibold",
			exalted: "text-exalted font-semibold",
		},
	});

	const dispatch = useDispatch();
	const collectionExists: boolean = useSelector((state: any) => {
		const exists = state.collection.collection ? true : false;
		return exists;
	});

	// ------------ Final Component Render ------------ //

	return (
		<div className="">
			<GlobalContext.Provider value={value}>
				<UploadModal />
				<NavHeader />
				<div className={heroDiv}>
					{collectionExists && <ConfigPanel />}
					<CollectionMap />
				</div>
			</GlobalContext.Provider>
		</div>
	);
}

export default App;
