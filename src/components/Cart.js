import { ListGroup } from "react-bootstrap"
import { CartState } from "../context/context"

const Cart = () => {

    const{
        state: { cart },
        dispatch
    } = CartState()

    return(
        <div className="home">
            <div className="productContainer">
                <ListGroup>
                    {cart.map((prod) => (
                            <span>
                                { prod.name }
                            </span>
                        ))}
                </ListGroup>
            </div>    
        </div>
    )
}

export default Cart