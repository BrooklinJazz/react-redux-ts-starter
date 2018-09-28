// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
// import App from './components/app'
import { IApplicationState, rootReducer  } from './store'


export default function configureStore() {
  return createStore<IApplicationState, any, any, any>(
    rootReducer,
    applyMiddleware(thunkMiddleware)
  );
}