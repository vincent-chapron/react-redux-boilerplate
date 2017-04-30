import {createStore, compose} from 'redux';
import createReducers from './modules';
import createMiddlewares from './middlewares';

export default history => {
    let enhancers = [
        createMiddlewares(history),
    ];

    if (process.env.NODE_ENV === 'development') {
        const devtools = window.devToolsExtension || (() => noop => noop);
        enhancers.push(devtools());
    }

    const store = createStore(  
        createReducers(),
        compose(...enhancers),
    );

    return store;
}
