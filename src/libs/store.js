import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

export default function configureStore(initialState = {}) {
    const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
        applyMiddleware(sagaMiddleware),
        // other store enhancers if any
    ));

    sagas.forEach((saga) => {
        sagaMiddleware.run(saga);
    });

    return store;
}
