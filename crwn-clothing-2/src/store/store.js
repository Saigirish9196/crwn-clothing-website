import { compose, applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const middleWares = [process.env.NODE_ENV==='development' && logger].filter(Boolean);

const persistConfig = {
    key: 'root',
    storage,
    blacklist:['user']
    
  }
const persistedReducer = persistReducer(persistConfig, rootReducer)
const composeEnhancer =
  (process.env.NODE_ENV==='development' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export  const store = createStore(persistedReducer,undefined,composedEnhancers);

export const persistor = persistStore(store)

