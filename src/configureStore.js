import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import promise from 'redux-promise'
import throttle from 'lodash/throttle'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './rootReducer'
import { loadState, saveState } from './localStorage'
import { getUsers } from './components/Users/actions'


/*
PROD mode
if (process.env.NODE_ENV === 'production') {
  const enhancer = applyMiddleware(thunk, promise)
}
*/

// DEV mode
const enhancer = composeWithDevTools(
    applyMiddleware(thunk, promise, createLogger(), reduxImmutableStateInvariant())
);


export default function configureStore (initialState) {
  const persistedState = loadState() // retrieve from LocalStorage
  const store = createStore(rootReducer, persistedState, enhancer)

  //store.dispatch(getUsers())

  store.subscribe(throttle(() => {
    saveState(store.getState())
  }, 1000))

  return store;
}
