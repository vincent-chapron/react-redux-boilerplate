import {applyMiddleware} from 'redux';
import {routerMiddleware} from 'react-router-redux';

export default history => {
    const middlewares = [
        routerMiddleware(history),
    ];

    return applyMiddleware(...middlewares);
}
