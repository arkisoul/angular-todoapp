import { Injectable } from "@angular/core";

import { Todo } from "./models/todo";

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    private todos: Todo[] = [new Todo({_id: 1, title: 'Create todo app', isCompleted: false, })];

    addTodo(todo: Todo) {
        this.todos.push(todo);
    }

    editTodo(updateTodo: Todo) {
        this.todos.forEach(todo => {
            if(todo._id === updateTodo._id) {
                todo = updateTodo;
            }
        })
    }

    deleteTodo(todoId: number) {
        this.todos = this.todos.filter(todo => todo._id !== todoId);
    }

    getAllTodos(): Todo[] {
        return this.todos;
    }

    getTodoById(todoId: number): Todo | Boolean {
        const todo = this.todos.filter(todo => todo._id === todoId)
        return todo.length ? todo[0] : false;
    }
}