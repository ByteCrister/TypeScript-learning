// Todos.tsx
import React, { useReducer } from 'react';
import TodoCard from '../components/TodoCard';

type TodoType = {
    id: number;
    title: string;
};

type ActionType = 
    | { type: 'add_todo'; payload: TodoType }
    | { type: 'update_todo'; payload: TodoType }
    | { type: 'delete_todo'; payload: number };

type StateType = {
    todos: TodoType[];
};

const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'add_todo':
            return { todos: [...state.todos, action.payload] };
        case 'update_todo':
            return { todos: state.todos.map((item) => item.id === action.payload.id ? { ...item, title: action.payload.title } : item) };
        case 'delete_todo':
            return { todos: state.todos.filter((item) => item.id !== action.payload) };
        default:
            return state;
    }
};

const initialValues: StateType = { todos: [] };

const Todos = () => {
    const [state, dispatch] = useReducer(reducer, initialValues);

    const handleAddTodo = (id: number, title: string) => {
        dispatch({ type: 'add_todo', payload: { id, title } });
    };

    const handleUpdateTodo = (id: number, title: string) => {
        dispatch({ type: 'update_todo', payload: { id, title } });
    };

    const handleDeleteTodo = (id: number) => {
        dispatch({ type: 'delete_todo', payload: id });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const inputElement = form.elements[0] as HTMLInputElement;
        if (inputElement.value) {
            handleAddTodo(state.todos.length + 1, inputElement.value);
            inputElement.value = ''; 
        }
    };
    

    return (
        <div>
            <h1>Todos</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="enter todo" />
                <button type="submit">Add Todo</button>
            </form>
            <TodoCard 
                state={state} 
                handleAddTodo={handleAddTodo} 
                handleUpdateTodo={handleUpdateTodo} 
                handleDeleteTodo={handleDeleteTodo} 
            />
        </div>
    );
};

export default Todos;
