import { noteManager } from './NoteManager.js';
import { Storage } from './Storage.js';

export const saveToFile = () => {
	Storage.saveToFile(noteManager.getNotes());
};
