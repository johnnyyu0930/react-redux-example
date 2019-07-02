import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import Immutable from 'immutable';
import reducers from './reducers';
import Example from './containers/example';

const initialState = Immutable.Map();

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(
      thunk,
      createLogger({ stateTransformer: state => state.toJS() })
  )
);

const App = () => (
  <div>
    <Example/>
  </div>
);

const root = document.getElementById('app');
ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, root);