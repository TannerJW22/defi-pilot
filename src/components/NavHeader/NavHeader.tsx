import { useDispatch, useSelector } from "react-redux";
import { FiUpload } from "react-icons/fi";
import { toggleModal } from "../../store";

import { navHeader, navLogo, navButtonDiv, uploadButton, uploadIcon } from "./NavHeader.tbz";

export function NavHeader() {
	const dispatch = useDispatch();

	const handleUploadClick = () => {
		dispatch(toggleModal(null));
	};

	return (
		//
		<div className={navHeader}>
			<a href="/">
				<img className={navLogo} alt="" src="/img/defi-pilot-logo.png" />
			</a>

			<div className={navButtonDiv}>
				<button onClick={handleUploadClick} className={uploadButton}>
					<FiUpload className={uploadIcon} />
					Upload Collection
				</button>
			</div>
		</div>
	);
}
