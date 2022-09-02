import { ListGroup } from "react-bootstrap"
import { CartState } from "../context/context"

const Cart = () => {

    const {
        state: { cart },
        dispatch
    } = CartState()

    return (
        <div className="home">
            <div className="productContainer">
                <ListGroup>
                    {cart.map((prod) => (
                        <span>
                            {prod.name}
                        </span>
                    ))}
                </ListGroup>
            </div>
            <div className="filters summary">
                <span className="title">Subtotal ({cart.length}) items</span>
                <span style={{ fontWeight: 700, fontSize: 20 }}>Total: Nrs {total}</span>
                <Button type="button" disabled={cart.length === 0}>
                    Proceed to Checkout
                </Button>
            </div>
        </div>
    )
}

export default Cart