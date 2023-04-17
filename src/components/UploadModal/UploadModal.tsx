import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal, updateMyCollection } from "../../store";

import { uploadModal, body, textArea, uploadButton, cancelButton } from "./UploadModal.tbz";

interface UploadModalProps {
	// onHide: () => void;
}

export function UploadModal(props: UploadModalProps) {
	const dispatch = useDispatch();
	const [textareaValue, setTextareaValue] = useState<string>("");
	const isVisible = useSelector((state: any) => state.modal.isVisible);

	const handleTextarea = (e: any) => {
		setTextareaValue(e.target.value);
	};

	const handleUploadClick = () => {
		// console.log("Button Clicked");
		dispatch(updateMyCollection(JSON.parse(textareaValue).items));
		dispatch(toggleModal(null));
	};

	const handleCancelClick = () => {
		// console.log("Button Clicked");
		dispatch(toggleModal(null));
	};

	return (
		<div className={`modal ${isVisible}`}>
			<div className="modal-background"></div>
			<div className="modal-card">
				<header className="modal-card-head bg-zinc-300">
					<p className="font-bold text-blue6 modal-card-title">How to Upload Items</p>
				</header>
				<section className={`modal-card-body ${body}`}>
					<p>
						<span className="font-bold">Step 1 - </span>Login to your{" "}
						<a
							className="underline font-semibold text-blue5 hover:text-blue3"
							href="https://openloot.com/login"
						>
							Open Loot Account
						</a>
						.
						<br />
						<span className="font-bold">Step 2 - </span>Copy your{" "}
						<a
							className="underline font-semibold text-blue5 hover:text-blue3"
							href="https://openloot.com/api/market/items?pageSize=1000&page=1"
						>
							Open Loot Collection
						</a>{" "}
						text to your clipboard.
						<br />
						<span className="font-bold">Step 3 - </span>Paste the text in the box below and click
						"Upload".
						<br />
						<textarea
							className={textArea}
							onChange={handleTextarea}
							value={textareaValue}
							placeholder={`Example:   {"items":[{"id":"9a972ae1- ...`}
							name="message"
							rows={7}
							cols={55}
						/>
						<br />
					</p>
				</section>
				<footer className="modal-card-foot flex justify-end">
					<button onClick={handleUploadClick} className={`button is-success ${uploadButton} `}>
						Upload
					</button>
					<button onClick={handleCancelClick} className={`button ${cancelButton} `}>
						Cancel
					</button>
				</footer>
			</div>
		</div>
	);
}
