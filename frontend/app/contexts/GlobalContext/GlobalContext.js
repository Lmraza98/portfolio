import React, { useState, createContext, useReducer } from "react"

const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_THEME':
            return {
                ...state,
                theme: action.payload === true ? 'dark' : 'light'
            };
        case 'SET_MENU':
            return {
                ...state,
                menu: !state.menu
            };
        case 'SET_ONLINE':
            return {
                ...state,
                online: action.payload
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

const initialState = {
    theme: 'light',
    menu: true,
    online: null
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;
