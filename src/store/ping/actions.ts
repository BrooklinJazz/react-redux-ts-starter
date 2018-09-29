import { createAction } from 'typesafe-actions'

const TOGGLE = '@@ping/TOGGLE'
const TEXT = '@@ping/TEXT'

export const PingActions = {
    textPing: createAction(TEXT, resolve => {
        return (text: string) => resolve(text);
    }),
    togglePing: createAction(TOGGLE, resolve => {
        return () => resolve();
    }),
}

export default PingActions