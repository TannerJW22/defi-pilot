import { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import { GlobalContext } from "../App/App";
import { updateCategoryFilter, updateMyCollection } from "../../store";
import {
	categoryDropdown,
	categoryDropdownMenu,
	categoryDropdownOption,
} from "./CategoryDropdown.tbz";

export function CategoryDropdown() {
	const dispatch = useDispatch();
	const { background, text }: any = useContext(GlobalContext);
	const [categoryToggleText, setCategoryToggleText] = useState("No Filter");
	const [categoryToggleStyle, setCategoryToggleStyle] = useState("");

	const handleCategoryClick = (event: any) => {
		event.preventDefault();
		let href = event.target.getAttribute("href");

		setCategoryToggleText(event.target.innerHTML);
		setCategoryToggleStyle(`bg-zinc-700`);
		dispatch(updateCategoryFilter(href));
	};

	const isCategoryFilterActive = (_CategoryToggleText: string) => {
		return _CategoryToggleText === "No Filter" ? false : true;
	};

	return (
		<Dropdown className="flex flex-col">
			<Dropdown.Header className="ml-3 mb-1.5 text-base font-semibold tracking-wide">
				Category
			</Dropdown.Header>
			<Dropdown.Toggle className={`${categoryDropdown} ${categoryToggleStyle}`}>
				{categoryToggleText}
			</Dropdown.Toggle>
			<Dropdown.Menu className={categoryDropdownMenu}>
				{isCategoryFilterActive(categoryToggleText) && (
					<Dropdown.Item
						onClick={handleCategoryClick}
						className={categoryDropdownOption}
						href="all"
					>
						No Filter
					</Dropdown.Item>
				)}
				<Dropdown.Item
					onClick={handleCategoryClick}
					className={categoryDropdownOption}
					href="armor"
				>
					Armor
				</Dropdown.Item>
				<Dropdown.Item
					onClick={handleCategoryClick}
					className={categoryDropdownOption}
					href="decoration"
				>
					Decoration
				</Dropdown.Item>
				<Dropdown.Item
					onClick={handleCategoryClick}
					className={categoryDropdownOption}
					href="emote"
				>
					Emotes
				</Dropdown.Item>
				<Dropdown.Item
					onClick={handleCategoryClick}
					className={categoryDropdownOption}
					href="footsteps"
				>
					Footsteps
				</Dropdown.Item>
				<Dropdown.Item
					onClick={handleCategoryClick}
					className={categoryDropdownOption}
					href="mysterybox"
				>
					Mystery Boxes
				</Dropdown.Item>
				<Dropdown.Item onClick={handleCategoryClick} className={categoryDropdownOption} href="pass">
					VIP Passes
				</Dropdown.Item>
				<Dropdown.Item
					onClick={handleCategoryClick}
					className={categoryDropdownOption}
					href="space"
				>
					SPACE
				</Dropdown.Item>
				<Dropdown.Item
					onClick={handleCategoryClick}
					className={categoryDropdownOption}
					href="title"
				>
					Titles
				</Dropdown.Item>
				<Dropdown.Item
					onClick={handleCategoryClick}
					className={categoryDropdownOption}
					href="weapons"
				>
					Weapons
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
}
