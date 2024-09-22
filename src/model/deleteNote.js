import { noteManager } from './NoteManager.js';
import { renderNotes } from './renderNotes.js';

export const deleteNote = (event) => {
	if (event.target.classList.contains('note__delete')) {
		const index = event.target.getAttribute('data-index');
		noteManager.deleteNote(index);
		renderNotes(noteManager.getNotes());
	}
};
