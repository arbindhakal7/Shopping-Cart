import { createContext, useContext, useReducer} from 'react'
import faker from "faker";
import { cartReducer } from './reducer';

const Cart = createContext()
faker.seed(99)

const Context = ({ children }) => {

    // fake data from fakerjs
    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
    }));
    
    //useReducer Hook is the better alternative to the useState hook and is generally more preferred over the useState hook when you have complex state-building logic 
    //or when the next state value depends upon its previous value or when the components are needed to be optimized
    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
    });
    

    // reducer for filtering
    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
    });

    //children will come from index.js
    return (<Cart.Provider value={{state, dispatch}}>{children}</Cart.Provider> // wrap all of our react app
    )
}

export default Context

export const CartState = () => {
    return useContext(Cart) // useContext takes the context which is Cart in this file
}