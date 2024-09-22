import { addNote } from './model/addNote.js';
import { deleteNote } from './model/deleteNote.js';
import { loadFromFile } from './model/loadFromFile.js';
import { noteManager } from './model/NoteManager.js';
import { renderNotes } from './model/renderNotes.js';
import { saveToFile } from './model/saveToFile.js';

window.addEventListener('load', () => {
    const noteForm = document.querySelector('.note__form');
    const noteList = document.querySelector('.note__list');
    const saveButton = document.querySelector('.note__save');
    const loadInput = document.querySelector('.note__load');
	
    renderNotes(noteManager.getNotes());

    noteForm.addEventListener('submit', addNote);
    saveButton.addEventListener('click', saveToFile);
    loadInput.addEventListener('change', loadFromFile);
    noteList.addEventListener('click', deleteNote);
});
