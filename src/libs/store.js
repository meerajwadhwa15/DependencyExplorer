import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

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