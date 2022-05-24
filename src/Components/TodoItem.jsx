import React, {useState} from 'react';
import deleteIcon from "./deleteIcon.png";
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

       <input className='checkbox' onClick={isChecked} type="checkbox"></input>
       <p className={style}>{props.post.text}</p>

     </div>
     <img className='deleteIcon' src={deleteIcon}/>
    </div>
  )
}

export default TodoItem;