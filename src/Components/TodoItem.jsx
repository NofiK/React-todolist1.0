import React, {useState} from 'react';
import { MdDelete } from 'react-icons/md';


const TodoItem = (props) => {

  const [checked,setChecked] = useState(false);
  const [style, setStyle] = useState("noCrossed");
   
  function isChecked(){
   setChecked(!checked);
   (checked)?setStyle("noCrossed"):setStyle("crossed")
 }

  return (
    <div className='todoListItems'>
     <div className='checkboxDiv'>
       <input id='checkbox_id' className='checkbox' onClick={isChecked} type="checkbox"></input>
       <label for='checkbox_id' className={style}>{props.post.text}</label>
     </div>
     <MdDelete onClick={()=>props.remove(props.post)} className='deleteIcon'/>
    </div>
  )
}

export default TodoItem;