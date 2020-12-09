import * as React from 'react'

const PageStateContext = React.createContext();
const PageDispatchContext = React.createContext();

const pageReducer = (state, action) => {
    switch(action.type)
    {
        case 'home':{
            return {page: "home"}
        }
        case 'skills':{
            return {page: "skills"}
        }
        case 'projects':{
            return {page: "projects"}
        }
        case 'blog':{
            return {page: "blog"}
        }
        case 'contact':{
            return {page: "blog"}
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}
const PageProvider = ({children}) =>
{
    const [state, dispatch] = React.useReducer(pageReducer, {page: "home"})
    return (
        <PageStateContext.Provider value={state}>
            <PageDispatchContext.Provider value={dispatch}>
                {children}
            </PageDispatchContext.Provider>
        </PageStateContext.Provider>
    )
}
const usePageState = () => {
    const context = React.useContext(PageStateContext)
    if(context === 'undefined') {
        throw new Error ('usePageState must be used within a PageProvider')
    }
    return context;
}
const usePageDispatch = () => {
    const context = React.useContext(PageDispatchContext)
    if (context === undefined) {
        throw new Error('usePageDispatch must be used within a PageProvider')
    }
    return context;
}

export {PageProvider, usePageState, usePageDispatch}
