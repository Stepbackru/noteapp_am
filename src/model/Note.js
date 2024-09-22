export class Note {
    constructor(content, timestamp = new Date()) {
        this.content = content;
        this.timestamp = new Date(timestamp);
    }

    format() {
        return `<p class="note__date">${this.timestamp.toLocaleString()}</p>
		<p class="note__text">${this.content}</p>`;
    }
}
