import React from 'react';
import { Subscribe } from 'unstated';
import TodosState from '@src/state/TodosState';

const AddTodo = () => {
  let input

  return (
    <Subscribe to={[TodosState]}>
    {
      (todos) => (
        <div>
          <form onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            todos.add(input.value)
            input.value = ''
          }}>
            <input ref={node => input = node} />
            <button type="submit">
              Add Todo
            </button>
          </form>
        </div>
      )
    }
    </Subscribe>
  )
}

export default AddTodo;