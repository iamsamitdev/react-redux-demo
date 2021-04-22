/* eslint-disable no-mixed-operators */
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const middleware = [thunk]

// กำหนดให้แสดง log ต่างๆ ผ่าน redux-devtool
const composeEnhancers = typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))