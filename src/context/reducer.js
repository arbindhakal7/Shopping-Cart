export const cartReducer = (state, action) => { //action can be increment or decrement
    switch (action.type) { //the action will check the increments or the actions

        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }

        case "REMOVE_FROM_CART":
            return {
                ...state, cart: state.cart.filter((c) => c.id !== action.payload.id),
            };
        case "CHANGE_CART_QTY":
            return {
                ...state,
                cart: state.cart.filter((c) =>
                    c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
                ),
            };
        default:
            return state;
    }
}

export const productReducer = (state, action) => {
    switch (action.type) { 
        case 'SORT_BY_PRICE':
            return { ...state, sort:action.payload }


        default:
            return state
    }
}
