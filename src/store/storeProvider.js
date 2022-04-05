import React, { useReducer } from 'react'
import StoreContext from "./storeContext";
import reducer, { initState } from './reducer';
import logger from './logger';

function StoreProvider({ children }) {

    const [state, dispatch] = useReducer(logger(reducer), initState);
    return (
        <StoreContext.Provider value={[state, dispatch]}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider;