import { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import { GlobalContext } from "../App/App";
import { updateSortFilter, updateMyCollection } from "../../store";
import { sortDropdown, sortDropdownMenu, sortDropdownOption } from "./SortDropdown.tbz";

export function SortDropdown() {
	const dispatch = useDispatch();
	const { background, text }: any = useContext(GlobalContext);
	const [sortToggleText, setSortToggleText] = useState("Default");
	const [sortToggleStyle, setSortToggleStyle] = useState("");

	const handleSortClick = (event: any) => {
		event.preventDefault();
		let href = event.target.getAttribute("href");

		setSortToggleText(event.target.innerHTML);
		setSortToggleStyle(`bg-zinc-700`);
		dispatch(updateSortFilter(href));
	};

	const isSortFilterActive = (_sortToggleText: string) => {
		return _sortToggleText === "Default" ? false : true;
	};

	return (
		<Dropdown className="flex flex-col">
			<Dropdown.Header className="ml-3 mb-1.5 text-base font-semibold tracking-wide">
				Sort By
			</Dropdown.Header>
			<Dropdown.Toggle className={`${sortDropdown}`}>{sortToggleText}</Dropdown.Toggle>
			<Dropdown.Menu flip={true} className={sortDropdownMenu}>
				{isSortFilterActive(sortToggleText) && (
					<Dropdown.Item onClick={handleSortClick} className={sortDropdownOption} href="all">
						Default
					</Dropdown.Item>
				)}
				{/* <Dropdown.Item onClick={handleSortClick} className={sortDropdownOption} href="common">
					Price (9-0)
				</Dropdown.Item>
				<Dropdown.Item onClick={handleSortClick} className={sortDropdownOption} href="uncommon">
					Price (0-9)
				</Dropdown.Item> */}
				<Dropdown.Item onClick={handleSortClick} className={sortDropdownOption} href="serial-d">
					Issue Number (9-0)
				</Dropdown.Item>
				<Dropdown.Item onClick={handleSortClick} className={sortDropdownOption} href="serial-a">
					Issue Number (0-9)
				</Dropdown.Item>
				<Dropdown.Item onClick={handleSortClick} className={sortDropdownOption} href="owned-d">
					Total Owned (9-0)
				</Dropdown.Item>
				<Dropdown.Item onClick={handleSortClick} className={sortDropdownOption} href="owned-a">
					Total Owned (0-9)
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
}
