export class Todo {
    title: string;
    checked: boolean;
    dateCreated: Date;

    constructor(
        title: string = '',
        checked: boolean = false,
        dateCreated: Date = new Date()
    ) {
        this.title = title;
        this.checked = checked;
        this.dateCreated = dateCreated;
    }
}
