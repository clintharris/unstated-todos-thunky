import React from 'react';

import styles from '@src/App.scss';
import AddTodo from '@src/components/AddTodo';
import Footer from '@src/components/Footer';
import VisibleTodoList from '@src/components/VisibleTodoList';

export default class App extends React.Component {
  
  render() {
    return (
      <div className={styles.root}>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}