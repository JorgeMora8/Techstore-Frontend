import React, { Children, createContext, useContext, useState } from 'react'
import axios from "axios"

const Context = createContext()

//GET Context
export function getContext(){ 
    return useContext(Context)
}

const AppContext = ({children}) => {

    const [cartList, setCartList] = useState(getProductInCart())

      function createLocalStorageCart(){ 
        let cartExits = localStorage.getItem("cart")
        if(!cartExits) localStorage.setItem("cart", "[]")
      }

      createLocalStorageCart()

      function getProductInCart(){ 
        const cart = localStorage.getItem("cart")
        return JSON.parse(cart)
      }

      function addProductInCart(product){ 
        let cart = localStorage.getItem("cart")
        let cartConverted =  JSON.parse(cart)

        let productExits = cartConverted.find((productSaved) => productSaved.id === product.id)
        if(productExits != undefined){ 
          let foundProduct = cartConverted.findIndex(productSaved => productSaved.id == product.id);
          cartConverted[foundProduct].items = cartConverted[foundProduct].items + product.items; 
          setCartList(cartConverted)
          localStorage.setItem("cart", JSON.stringify(cartConverted))
        }else { 
            cartConverted.push(product)
            setCartList(cartConverted)
            localStorage.setItem("cart", JSON.stringify(cartConverted))
        }
      }

      function removeProductInCart(productId){ 
        let cart = localStorage.getItem("cart")
        let cartConverted =  JSON.parse(cart)

        cartConverted = cartConverted.filter((product) => product.id !== productId)
        setCartList(cartConverted)
        localStorage.setItem("cart", JSON.stringify(cartConverted))
      }

      function clearCart(){ 
        let cart = localStorage.getItem("cart")
        let cartConverted =  JSON.parse(cart)

        cartConverted = []
        setCartList(cartConverted)
        localStorage.setItem("cart", JSON.stringify(cartConverted))
      }
      
  function getTotalCartPrice(){
    let total = 0
    for(let p=0; p<cartList.length; p++){ 
      let addProductPriceTotal = cartList[p].price * cartList[p].items
      total += addProductPriceTotal
    }
    return total
  }

  function getTotalProductCartUnits(){
    let totalProducts = 0
    for(let p=0; p<cartList.length; p++){ 
      totalProducts += cartList[p].items
    }
    return totalProducts
  }



  return (
    <>
    <Context.Provider value={{
        getProductInCart, 
        addProductInCart, 
        removeProductInCart,
        clearCart,
        getTotalCartPrice, 
        getTotalProductCartUnits,
    }}>
        {children}
    </Context.Provider>
  </>
  )
}

export default AppContext

