import React, {useState} from 'react'
import Input from './Input'
const AddTodoItem = ({create}) => {
 const [text, setText] = useState("")
 

  function addNewItem(){
    const newText = {
     id: Date.now(),
     text
    };
    if(text){
        create(newText)
        setText("")
    }else{
        alert("Please type your todo!")
    }     
  }


  return (
    <div className='addSection'>
        <Input 
         value={text}
         onChange={e=> setText(e.target.value)}
         placeholder={"Type an item"}
         />
        <button onClick={addNewItem} className='addBtn'>➕</button>
    </div>
  )
}

export default AddTodoItem