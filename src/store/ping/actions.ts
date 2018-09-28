import { action } from 'typesafe-actions'
import { PingActionTypes } from './types'

export const ping = () => action(PingActionTypes.PING)