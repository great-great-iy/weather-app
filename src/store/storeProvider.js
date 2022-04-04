import React, { useEffect, useReducer } from 'react'
import StoreContext from "./storeContext";
import reducer, { initState } from './reducer';
import logger from './logger';

function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(logger(reducer), initState);

    useEffect(() => {
    }, [])

    return (
        <StoreContext.Provider value={[state, dispatch]}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider;