import { CartState } from "../context/context"

const Cart = () => {

    const{
        state: { cart },
        dispatch
    } = CartState()

    return(
        <div>
        Cart    
        </div>
    )
}

export default Cart