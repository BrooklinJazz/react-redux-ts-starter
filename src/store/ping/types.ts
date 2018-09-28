import { ActionType } from 'typesafe-actions';

export interface IPingState {
    readonly ping: boolean
}

export const enum PingActionTypes {
    PING = '@@ping/PING',
}


import * as PingActions from './actions';

export type PingIt = ActionType<typeof PingActions.ping>;
