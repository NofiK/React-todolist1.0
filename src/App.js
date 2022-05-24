import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import TodoList from './Components/TodoList';

function App() {
  

  return (
    <div className="App">
      <Header />
      <TodoList/>
    </div>
  );
}

export default App;
