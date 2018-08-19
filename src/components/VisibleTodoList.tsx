import React from 'react';
import { Subscribe } from 'unstated';
import TodoList from '@src/components/TodoList';
import TodosState from '@src/state/TodosState';
import VisibilityFilterState, { VisibilityFilter } from '@src/state/VisibilityFilterState';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilter.SHOW_ALL:
      return todos
    case VisibilityFilter.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilter.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const VisibleTodoList = () => {
  return (
    <Subscribe to={[TodosState, VisibilityFilterState]}>
    {
      (todos: TodosState, visibility: VisibilityFilterState) => 
        <TodoList todos={getVisibleTodos(todos.state.todos, visibility.state.filter)} toggleTodo={todos.toggle} />
    }
    </Subscribe>
  )
};

export default VisibleTodoList;