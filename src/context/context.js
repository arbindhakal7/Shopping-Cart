import React, { createContext } from 'react'

const Cart = createContext()

const Context = ({ children }) => {
    //children will come from index.js
    return <Cart.Provider>{children}</Cart.Provider> // wrap all of our react app
}

export default Context