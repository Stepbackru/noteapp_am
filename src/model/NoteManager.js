import { Note } from './Note.js';

class NoteManager {
    constructor() {
        const savedNotes = JSON.parse(localStorage.getItem('notes_am')) || [];
        this.notes = savedNotes.map(noteData => new Note(noteData.content, noteData.timestamp));
    }

    addNote(content) {
        const note = new Note(content);
        this.notes.push(note);
        this.saveNotes();
    }

    deleteNote(index) {
        this.notes.splice(index, 1);
        this.saveNotes();
    }

    getNotes() {
        return this.notes;
    }

    saveNotes() {
        localStorage.setItem('notes_am', JSON.stringify(this.notes));
    }

    loadNotesFromJson(notesArray) {
        this.notes = notesArray.map(noteData => {
            const note = new Note(noteData.content);
            note.timestamp = new Date(noteData.timestamp);

            return note;
        });
        this.saveNotes();
    }
}

export const noteManager = new NoteManager();
