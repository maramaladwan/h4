


import React, { useState } from 'react'

const Cheak = () => {
  const checkList = [
    {name:"Arabic",istrue:true},
    {name:"English",isfalse:false},
    {name:"Sciences",istrue:false},
  ]
  const [isChecked, setIsChecked] = useState(false);

   



  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  }

 
  return (
    <>
  {checkList.map((item, index) => (
     <div key={index}>
     <input value={item} type="checkbox" checked={isChecked}  onChange={handleCheckboxChange} />
    {isChecked? <span><del>{item.name}</del> &#10003;</span> :<span>{item.name}</span>} 
   </div>
))}
    </>
  )

}


export default Cheak