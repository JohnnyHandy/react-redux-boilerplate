import { persistStore, persistReducer } from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage'

import rootReducer, { rootSaga } from './index'
import { onAuthErrors, addTokenToRequest } from './middlewares'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware()

export default ({ initialState } = {}) => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: [sagaMiddleware, addTokenToRequest, onAuthErrors],
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production'
  })
  let persistor = persistStore(store)

  sagaMiddleware.run(rootSaga)

  return { store, persistor }
}
