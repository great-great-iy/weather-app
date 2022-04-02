function logger(reducer) {
    return (prevState, action) => {

        const nextState = reducer(prevState, action)

        return nextState;
    }
}

export default logger;