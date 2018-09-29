# Quickstart
## Clone the project
```
git clone git@github.com:BrooklinJazz/react-redux-ts-starter.git
```
## Install Packages
```js
// npm
npm install
// yarn
yarn install
```
## Start the Project
```js
// npm
npm run start
// yarn
yarn start
```
open the project at localhost:3000
# Defining Actions
```js
// This project uses the typesafe-actions library.
import { createAction } from 'typesafe-actions'

const SAMPLE_ACTION = '@@sample/SAMPLE_ACTION'

export const SampleActions = {
    sampleAction: createAction(SAMPLE_ACTION, resolve => {
        return (text: string) => resolve(text);
    }),
}

export default SampleActions
```
# Defining Reducers
```js
import { Reducer } from 'redux'
import { getType } from 'typesafe-actions';
import SampleActions from './actions';
import { ISampleState, SampleActionType } from './types'

const initialState: ISampleState = {
  text: '',
}

const reducer: Reducer<ISampleState> = (state = initialState, action: SampleActionType) => {
  switch (action.type) {
    case getType(SampleActions.sampleAction): {
      return { ...state, text: action.payload }
    }
    default: {
      return state
    }
  }
}

export { reducer as sampleReducer }
```
# Defining Types
```js
import { ActionType } from 'typesafe-actions';
import SampleActions from './actions';

// the type for initial state
export interface ISampleState {
    readonly text: string
}

// the type for all actions
export type SampleActionType = ActionType<typeof SampleActions>;
```

# Component Skeleton
```js
import * as React from "react";
import { connect } from 'react-redux'
import { Dispatch  } from 'redux'
import { IApplicationState } from 'src/store'
import { SampleActions } from "src/store/sample/actions";
import { ISampleState } from "src/store/sample/types";

interface IStateProps {
    text: ISampleState["text"];
}

interface IDispatchProps {
    sampleAction: typeof SampleActions.sampleAction;
}

const mapStateToProps = (state: IApplicationState): IStateProps => ({
    text: state.sample.text,
})

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
    sampleAction: (text: string) => dispatch(SampleActions.sampleAction(text)),
})

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type Props = IStateProps & IDispatchProps

class SampleComponent extends React.Component<Props > {
    constructor(props: Props) {
        super(props)
        this.changeText = this.changeText.bind(this);
    }
    public render() {
        return (
            <React.Fragment>
                <input onChange={this.changeText} />
                <div>{this.props.text}</div>
            </React.Fragment>
        );
    };

    private changeText(e: any) {
        this.props.sampleAction(e.target.value);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleComponent);
```
# Root Reducer
```js
// ./src/store/index.ts

import { combineReducers } from 'redux'
import { exampleReducer } from './example/reducers'
import { IExampleState } from './example/types'

export interface IApplicationState {
  example: IExampleState
}

export const rootReducer = combineReducers<IApplicationState>({
  example: exampleReducer,
})
```