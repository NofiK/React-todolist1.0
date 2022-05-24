import React from 'react'


const CurrentDate = () => {
    let today = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
  return (
    <div className='dateDiv'>
        <h2>Today</h2>
        <p className='currentDate'>{today.getDate()+ " " +monthNames[today.getMonth()]+ " " +today.getFullYear()}</p>
     </div>
  )
}

export default CurrentDate