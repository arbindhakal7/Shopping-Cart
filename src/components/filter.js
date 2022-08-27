import React from 'react'
import {Form, Button } from 'react-bootstrap'

const Filters = () => {
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
            type = "radio"
            id = {"inline-4"}
            />
        </span>
        <Button variant="light">Clear Filters</Button>
    </div>
  )
}

export default Filters
