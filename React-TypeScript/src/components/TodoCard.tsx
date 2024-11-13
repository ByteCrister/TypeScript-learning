// TodoCard.tsx
import React from 'react';

type TodoType = {
    id: number;
    title: string;
};

type PropsType = {
    state: { todos: TodoType[] };
    handleAddTodo: (id: number, title: string) => void;
    handleUpdateTodo: (id: number, title: string) => void;
    handleDeleteTodo: (id: number) => void;
};

const TodoCard = ({ state, handleUpdateTodo, handleDeleteTodo }: PropsType) => {
    return (
        <div>
            {state.todos.length > 0 ? (
                state.todos.map((item) => (
                    <div key={item.id}>
                        <p>{item.title}</p>
                        <button onClick={() => handleUpdateTodo(item.id, 'Updated Title')}>Update</button>
                        <button onClick={() => handleDeleteTodo(item.id)}>Delete</button>
                    </div>
                ))
            ) : (
                <p>No todos available</p>
            )}
        </div>
    );
};

export default TodoCard;
