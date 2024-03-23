import { Message } from "./Message.js";

export const AdminPanel = () => {

	setTimeout(() => {
		const backgroundColorSelectionElem = document.querySelector('.backgroundColorSelection');
		const bodyElem = document.querySelector('body');

		if (backgroundColorSelectionElem) {
			backgroundColorSelectionElem.addEventListener('change', (e) => {
				const htmlColor = e.target.value;
				bodyElem.style.backgroundColor = htmlColor;
			});
		}
	}, 0);

	return /*html*/ `
<section class="admin">
	<select class="backgroundColorSelection">
		<option value="beige">Beige</option>
		<option value="#ccc">Light gray</option>
		<option value="#888">Dark gray</option>
	</select> 
	${Message()}
</section>
	`;
};