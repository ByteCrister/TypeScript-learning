import React, { useReducer } from "react";

type StateType = { count: number };
type ActionType = { type: 'decrement' | 'increment' | 'reset' };

const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            return state;
    }
};

const initialState: StateType = { count: 0 };

const Example_9 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleStateChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        const actionType = e.currentTarget.textContent?.toLowerCase() as ActionType['type'];
        dispatch({ type: actionType });
    };

    return (
        <div>
            <h2>Count: {state.count}</h2>
            <button onClick={handleStateChange}>Increment</button>
            <button onClick={handleStateChange}>Decrement</button>
            <button onClick={handleStateChange}>Reset</button>
        </div>
    );
};

export default Example_9;
