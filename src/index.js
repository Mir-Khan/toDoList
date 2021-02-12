import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './ToDoList';
import { Provider } from 'react-redux';
import store from './redux/store';
import { saveState } from './util/localStorage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './styles.css';

store.subscribe(() => {
  saveState({
    todos: store.getState().todos
  })
});

ReactDOM.render(
  <Provider store={store}>
    <Container fluid>
      <ToDoList />
    </Container>
  </Provider>,
  document.getElementById('root')
);
