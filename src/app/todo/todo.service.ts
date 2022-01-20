import { Injectable } from "@angular/core";

import { Todo } from "./models/todo";

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    private todos: Todo[] = [new Todo({_id: 1, title: 'Create todo app', isCompleted: false, })];
    private completed: number = 0;
    private incomplete: number = 0;

    addTodo(todo: Todo) {
        this.todos.push(todo);
        this.updateSummary();
    }

    editTodo(updateTodo: Todo) {
        this.todos.forEach(todo => {
            if(todo._id === updateTodo._id) {
                todo = updateTodo;
            }
        })
        this.updateSummary();
    }

    deleteTodo(todoId: number) {
        this.todos = this.todos.filter(todo => todo._id !== todoId);
        this.updateSummary()
    }

    getAllTodos(): Todo[] {
        return this.todos;
    }

    getTodoById(todoId: number): Todo | Boolean {
        const todo = this.todos.filter(todo => todo._id === todoId)
        return todo.length ? todo[0] : false;
    }

    updateSummary() {
        const completed = this.todos.filter((todo: Todo) => todo.isCompleted);
        this.completed = completed.length;
        this.incomplete = this.todos.length - this.completed;
    }

    getSummary() {
        return { completed: this.completed, incomplete: this.incomplete, total: this.completed + this.incomplete }
    }
}