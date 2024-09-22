import { noteManager } from './NoteManager.js';
import { renderNotes } from './renderNotes.js';

export const addNote = (event) => {
	event.preventDefault();
    const noteInput = document.querySelector('.note__textarea');
	const content = noteInput.value.trim();

	if (!content) return;

	noteManager.addNote(content);
	noteInput.value = '';
	renderNotes(noteManager.getNotes());
};
