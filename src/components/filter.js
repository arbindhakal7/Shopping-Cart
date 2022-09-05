import React, { useState } from 'react'
import {Form, Button } from 'react-bootstrap'
import { CartState } from '../context/context'
import Rating from './Rating'

const Filters = () => {

    const {productState: { byStock, byFastDelivery, sort, byRating }, productDispatch} = CartState()

    return (
    <div className='filters'>
        <span className='title'>Filter Products</span>
        <span>
            <Form.Check
            inline 
            label = "Ascending"
            name = "group1"
            type = "radio"
            id = {"inline-1"}
            />
        </span>

        <span>
            <Form.Check
            inline 
            label = "Descending"
            name = "group1"
            type = "radio"
            id = {"inline-2"}
            />
        </span>

        <span>
            <Form.Check
            inline 
            label = "Include out of Stock"
            name = "group1"
            type = "checkbox"
            id = {"inline-3"}
            />
        </span>

        <span>
            <Form.Check
            inline 
            label = "International Delivery Only"
            name = "group1"
            type = "checkbox"
            id = {"inline-4"}
            />
        </span>
        <span>
            <label style={{ paddingRight:10 }}>Rating: </label>
            <Rating rating={byRating} onClick={(i) =>
            productDispatch({
            type: "FILTER_BY_RATING",
            payload: i + 1,
            })
        }
        style={{ cursor:"pointer" }}
            />
        </span>
        <Button variant="light">Clear Filters</Button>
    </div>
)
}

export default Filters
