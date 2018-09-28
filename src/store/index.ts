// ./src/store/index.ts

import { combineReducers } from 'redux'
import { pingReducer } from './ping/reducers'
import { IPingState } from './ping/types'
// import { routerReducer, RouterState } from 'react-router-redux'

export interface IApplicationState {
  ping: IPingState
}

export const rootReducer = combineReducers<IApplicationState>({
  ping: pingReducer,
})