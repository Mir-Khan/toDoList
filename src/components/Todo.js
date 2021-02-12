import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { toggleTodo } from '../redux/actions';

const Todo = ({ todo, toggleTodo }) => (
    <p className="todo-item toggle-todo" onClick={() => toggleTodo(todo.id)}>
        <span
            className={cx(
                "todo-item__text",
                todo && todo.completed && "todo-item__text--completed"
            )}
        >
            {todo.content}
        </span>
    </p>
);

export default connect(null, { toggleTodo })(Todo);