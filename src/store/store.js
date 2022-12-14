import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: []
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk));

export const persistor = persistStore(store);