
import { Container } from 'unstated';
import { ITodo } from '@src/models';
import VisibilityFilterState, { VisibilityFilter } from '@src/state/VisibilityFilterState';

export interface ITodosState {
  todos: ITodo[];
}

export default class TodosState extends Container<ITodosState> {

  constructor(visibilityState: VisibilityFilterState) {
    super();
    this.visibilityState = visibilityState;
  }

  visibilityState: VisibilityFilterState;
  nextTodoId: number = 0;

  state = {
    todos: []
  };

  add = (text: string) => {
    this.setState((state) => ({
      todos: [
        ...state.todos,
        { id: this.nextTodoId++, text, completed: false } as ITodo
      ]
    }));

    // Let's get thunky.
    if(this.visibilityState.state.filter === VisibilityFilter.SHOW_COMPLETED) {
      this.visibilityState.setVisibilityFilter(VisibilityFilter.SHOW_ALL);
    }
  }

  toggle = (id: number) => {
    this.setState((state) => ({
      todos: state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo )
    }));
  }

  getVisible
}