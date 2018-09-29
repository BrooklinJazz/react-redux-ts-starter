import { ActionType } from 'typesafe-actions';
import PingActions from './actions';

export interface IPingState {
    readonly ping: boolean
    readonly text: string
}

export type PingActionType = ActionType<typeof PingActions>;