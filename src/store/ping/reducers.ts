import { Reducer } from 'redux'
import { IPingState, PingActionTypes } from './types'

const initialState: IPingState = {
  ping: false,
}

const reducer: Reducer<IPingState> = (state = initialState, action) => {
  switch (action.type) {
    case PingActionTypes.PING: {
      return { ...state, ping: true }
    }
    default: {
      return state
    }
  }
}

export { reducer as pingReducer }