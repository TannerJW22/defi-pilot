import { useSelector, useDispatch } from "react-redux";
import { updateSearchTerm } from "../../store";

import { Button, Form, InputGroup } from "react-bootstrap";
import { searchBar, input, searchButton, searchIcon } from "./SearchBar.tbz";
import { FaSearch } from "react-icons/fa";

export function SearchBar() {
	const dispatch = useDispatch();

	const searchTerm: string = useSelector((state: any) => {
		return state.collection.searchTerm;
	});

	const handleSearchTermChange = (event: any) => {
		dispatch(updateSearchTerm(event.target.value));
	};

	return (
		<InputGroup className={searchBar}>
			<div className="flex">
				<Form.Control
					className={input}
					value={searchTerm}
					onChange={handleSearchTermChange}
					type="search"
					placeholder=" Search"
				/>
				<Button className={searchButton}>
					<FaSearch className={searchIcon} />
				</Button>
			</div>
		</InputGroup>
	);
}
