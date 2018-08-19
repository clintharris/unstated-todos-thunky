import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unstated';
import 'modern-normalize/modern-normalize.css';

import App from '@src/App';
import VisibilityFilterState from '@src/state/VisibilityFilterState';
import TodosState from '@src/state/TodosState';

console.info('Starting up...');

const visibilityState = new VisibilityFilterState();
const todoState = new TodosState(visibilityState);

ReactDOM.render(
  <Provider inject={[visibilityState, todoState]}>
    <App/>
  </Provider>,
  document.getElementById('root')
);