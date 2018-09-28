export interface IPingState {
    readonly ping: boolean
}

export const enum PingActionTypes {
    PING = '@@ping/PING',
}