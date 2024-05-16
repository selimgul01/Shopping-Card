import { useState } from "react"
import Cart from "./components/Cart"
import Header from "./components/Header"
import Products from "./components/Products"


function App() {
  
  const [cart,setCart] = useState([])

  const cartEmpty = () => {
    setCart([])
  }

  return (
    <>
      <div className='container mx-auto p-4'>
        
        <Header cart={cart}></Header>
        <Products cart = {cart} setCart= {setCart}></Products>
        <Cart cart = {cart} cartEmpty={cartEmpty} ></Cart>
      </div>
    </>
  )
}

export default App
