import React from 'react'

export const filter = () => {
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
    </div>
  )
}
