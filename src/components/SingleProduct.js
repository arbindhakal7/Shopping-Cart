import React from 'react'
import { Card } from 'react-bootstrap'

const SingleProduct = ({ prod }) => {
    return <div className='prducts'>
        <Card>
            <Card.Img variant = "top" src={ prod.img } alt={ prod.name } />
        </Card>
    </div>

}

export default SingleProduct