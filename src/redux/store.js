import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddlewares = createSagaMiddleware();
const middlewares = [sagaMiddlewares];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddlewares.run(rootSaga);

const persistor = persistStore(store);

export {store, persistor};
