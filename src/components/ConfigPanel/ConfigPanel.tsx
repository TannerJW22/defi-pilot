import { SortDropdown } from "../SortDropdown/SortDropdown";
import { CategoryDropdown } from "../CategoryDropdown/CategoryDropdown";
import { RarityDropdown } from "../RarityDropdown/RarityDropdown";
import { SearchBar } from "../SearchBar/SearchBar";

import { configPanel } from "./ConfigPanel.tbz";

export function ConfigPanel() {
	return (
		//
		<div className={configPanel}>
			<SearchBar />
			<SortDropdown />
			<CategoryDropdown />
			<RarityDropdown />
		</div>
	);
}
