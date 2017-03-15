  import {combineReducers} from 'redux'
  import UserReducer       from './components/Users/reducer'

  /*
   * ROOT REDUCER
   * We combine all reducers into a single root object before updated data is dispatched (sent) to store
   * Your entire app state (store) is just whatever gets returned from all your reducers
   *
   */

  const rootReducer = combineReducers({ UserReducer })
  export default rootReducer
