import React, {useState} from 'react';
import TodoItem from './TodoItem';
import AddTodoItem from './AddTodoItem';

const TodoList = () => {
    const [mockedTodoItems,setMockedTodoItems] = useState([{
        id: "962c6353-f26c-4549-91ca-03961427593c" ,
        text: "Breakfast"
        },
        {
        id: "e1e917ac-34d0-4bd1-a621-5a6f61b758e2" ,
        text: "Go running"
        },
        {
        id: "c3a755cb-8dc6-4fc0-a9d2-6cf0d3176203" ,
        text: "Play computer games"
        },
        {
        id: "c3a755cb-8dc6-4fc0-a9d2-6cf0d3176245" ,
        text: "Dinner with friend"
    }]);
     function removeGoal(post){
      setMockedTodoItems(mockedTodoItems.filter(p=> p.id !== post.id))
     }

    function createGoal(newText){
        setMockedTodoItems([...mockedTodoItems, newText])
    }
    
  return (
      <div>
        <AddTodoItem create={createGoal}/>
        {mockedTodoItems.map(text=>
        <TodoItem remove={removeGoal} post={text} key={text.id}/>
      )}
      </div>
   
  )
}

export default TodoList