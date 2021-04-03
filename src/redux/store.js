import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from './reducers/rootReducer';
import sagaWatcher from '../saga';


const sagaMiddleware = createSagaMiddleware();


const store = createStore(rootReducer, compose(
    applyMiddleware(sagaMiddleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleware.run(sagaWatcher);

export default store