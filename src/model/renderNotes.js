export const renderNotes = (notes) => {
    const noteList = document.querySelector('.note__list');
	
	noteList.innerHTML = notes.map((note, index) => `
		<li class="note__item">
			<div class="note__content">${note.format()}</div>
			<button class="note__delete" data-index="${index}">Удалить</button>
		</li>
	`).join('');
};
