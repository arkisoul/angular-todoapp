type TODO = {
    id: number;
    title: string;
    isCompleted: boolean;
}

export class Todo {
    id: number;
    title: string;
    isCompleted: boolean;

    constructor(todo: TODO = {id: 0, title: '', isCompleted: false}) {
        this.id = todo.id;
        this.title = todo.title;
        this.isCompleted = todo.isCompleted;
    }
}
