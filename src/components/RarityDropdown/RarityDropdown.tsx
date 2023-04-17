import { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import { GlobalContext } from "../App/App";
import { updateRarityFilter, updateMyCollection } from "../../store";
import { rarityDropdown, rarityDropdownMenu, rarityDropdownOption } from "./RarityDropdown.tbz";

export function RarityDropdown() {
	const dispatch = useDispatch();
	const { background, text }: any = useContext(GlobalContext);
	const [rarityToggleText, setRarityToggleText] = useState("No Filter");
	const [rarityToggleStyle, setRarityToggleStyle] = useState("");

	const handleRarityClick = (event: any) => {
		event.preventDefault();
		let href = event.target.getAttribute("href");

		setRarityToggleText(event.target.innerHTML);
		setRarityToggleStyle(`${text[href]} bg-zinc-700`);
		dispatch(updateRarityFilter(href));
	};

	const isRarityFilterActive = (_rarityToggleText: string) => {
		return _rarityToggleText === "No Filter" ? false : true;
	};

	return (
		<Dropdown className="flex flex-col">
			<Dropdown.Header className="ml-3 mb-1.5 text-base font-semibold tracking-wide">
				Rarity
			</Dropdown.Header>
			<Dropdown.Toggle className={`${rarityDropdown} ${rarityToggleStyle}`}>
				{rarityToggleText}
			</Dropdown.Toggle>
			<Dropdown.Menu flip={true} className={rarityDropdownMenu}>
				{isRarityFilterActive(rarityToggleText) && (
					<Dropdown.Item
						onClick={handleRarityClick}
						className={`${rarityDropdownOption} text-white font-medium hover:bg-zinc-300`}
						href="all"
					>
						No Filter
					</Dropdown.Item>
				)}
				<Dropdown.Item
					onClick={handleRarityClick}
					className={`${rarityDropdownOption} text-common hover:bg-zinc-300`}
					href="common"
				>
					Common
				</Dropdown.Item>
				<Dropdown.Item
					onClick={handleRarityClick}
					className={`${rarityDropdownOption} text-uncommon hover:bg-uncommon`}
					href="uncommon"
				>
					Uncommon
				</Dropdown.Item>
				<Dropdown.Item
					onClick={handleRarityClick}
					className={`${rarityDropdownOption} text-rare hover:bg-rare`}
					href="rare"
				>
					Rare
				</Dropdown.Item>
				<Dropdown.Item
					onClick={handleRarityClick}
					className={`${rarityDropdownOption} text-epic hover:bg-epic`}
					href="epic"
				>
					Epic
				</Dropdown.Item>
				<Dropdown.Item
					onClick={handleRarityClick}
					className={`${rarityDropdownOption} text-legendary hover:bg-legendary`}
					href="legendary"
				>
					Legendary
				</Dropdown.Item>
				<Dropdown.Item
					onClick={handleRarityClick}
					className={`${rarityDropdownOption} text-mythic hover:bg-mythic`}
					href="mythic"
				>
					Mythic
				</Dropdown.Item>
				<Dropdown.Item
					onClick={handleRarityClick}
					className={`${rarityDropdownOption} text-exalted hover:bg-exalted`}
					href="exalted"
				>
					Exalted
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
}
