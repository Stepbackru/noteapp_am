import { Storage } from './Storage.js';
import { noteManager } from './NoteManager.js';
import { renderNotes } from './renderNotes.js';

export const loadFromFile = (e) => {
	const file = e.target.files[0];
	
	if (file) {
		Storage.loadFromFile(file, (loadedNotes) => {
			noteManager.loadNotesFromJson(loadedNotes);
			renderNotes(noteManager.getNotes());
		});
	}
};
