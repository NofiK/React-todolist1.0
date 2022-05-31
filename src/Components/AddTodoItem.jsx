import React, {useState} from 'react'
import Input from './Input'
import { BiPlusMedical } from 'react-icons/bi';
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
        <BiPlusMedical onClick={addNewItem} className='addIcon'/>
    </div>
  )
}

export default AddTodoItem