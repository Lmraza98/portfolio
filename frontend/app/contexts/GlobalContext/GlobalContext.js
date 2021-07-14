import React, { useState, createContext, useReducer } from "react"

const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_THEME':
            return {
                ...state,
                theme: action.payload === true ? 'dark' : 'light'
            };
        case 'SET_NAV':
            return {
                ...state,
                navigation: action.payload
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
        case 'ADD_CATEGORY':
            let categories = state.categories
            categories.push(action.payload)
            return {
                ...state, 
                categories: categories
            }
        case 'SET_GREETINGS':
            return {
                greetings: !state.greetings
            }
        case 'REMOVE_CATEGORY': 
            categories = state.categories
            let index = categories.findIndex( (value) => value === action.payload )
            if (index > -1) {
                categories.splice(index, 1);
            }
            return {
                ...state,
                categories: categories
            }
        default:
            return state;
    }
};

const initialState = {
    theme: 'light',
    menu: {
        greetings: true,
        about: false,
        work: false,
        contact: false
    },
    navigation: [],
    online: null,
    categories: [],
    greetings: true
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
