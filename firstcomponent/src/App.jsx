import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './MyButton'

function App() {
 
  const handleClick =()=>{
    console.log("clickme")
}
const handleCart =()=>{
  alert("cart")
}
const handlePayment =()=>{
  console.log("pay")
}
const handleSubmit =()=>{
  alert("submit")
}

  return (
    <>
    <MyButton buttonText="click" bgColor="pink" clickme={handleClick}/>
    <MyButton buttonText="cart" bgColor="red" clickme={handleCart}/>
    <MyButton buttonText="payment" bgColor="violet" clickme={handlePayment}/>
    <MyButton buttonText="submit" bgColor="green" clickme={handleSubmit}/>
    </>
    
  )
}

export default App
