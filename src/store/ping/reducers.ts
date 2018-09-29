import { Reducer } from 'redux'
import { getType } from 'typesafe-actions';
import PingActions from './actions';
import { IPingState, PingActionType } from './types'

const initialState: IPingState = {
  ping: false,
  text: '',
}

const reducer: Reducer<IPingState> = (state = initialState, action: PingActionType) => {
  switch (action.type) {
    case getType(PingActions.togglePing): {
      return { ...state, ping: state.ping ? false : true }
    }
    case getType(PingActions.textPing): {
      return { ...state, text: action.payload }
    }
    default: {
      return state
    }
  }
}

export { reducer as pingReducer }