import React from 'react'

const MyButton = (props) => {
    let {buttonText:text,bgColor:color,clickme}=props

    
   
  return (
    <button style={{backgroundColor:color}} onClick={clickme}>{text} </button>
  )
}

export default MyButton
