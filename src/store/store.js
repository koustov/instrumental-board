import { applyMiddleware, combineReducers, createStore } from 'redux'

import reducers from '../reducers'
import reduxPromise from 'redux-promise'

const middlewares = applyMiddleware(reduxPromise)

export default createStore(combineReducers(reducers), middlewares)
