import { Button, ListGroup, Col, Image, Row } from "react-bootstrap"
import { CartState } from "../context/context"
import { useEffect, useState } from "react";
import Rating from "./Rating";

const Cart = () => {

    const {
        state: { cart },
        dispatch
    } = CartState()
    const [total, setTotal] = useState();


    //calculate total price
    useEffect(() => {
        setTotal(
            //acc = accumulator and it will have a default value of 0
            cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
        );
    }, [cart]);


    return (
        <div className="home">
            <div className="productContainer">
                <ListGroup>
                    {cart.map((prod) => (
                        <ListGroup.Item key={prod.id}>
                        <Row>
                            <Col md={2}>
                                <Image src={prod.image} alt={prod.name} fluid rounded />
                            </Col>
                            <Col md={2}>
                                <span>{prod.name}</span>
                            </Col>
                            <Col md={2}>Nrs {prod.price}</Col>
                            <Col md={2}>
                                <Rating rating={prod.ratings} />
                            </Col>
                        </Row>
                        </ListGroup.Item>
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