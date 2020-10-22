//2.action types
export const INCREMENT_ITEM = "INCREMENT_ITEM"
export const DECREMENT_ITEM = "DECREMENT_ITEM"

//3.Action Creators
export const addItem = name => {    
    return {
        type: INCREMENT_ITEM,
        payload: {name}
    }
}

export const subtractItem = name => ({  //here we are enclosing in braces bcs we r not evaluating anything as in addItem
    type: DECREMENT_ITEM,
    payload: {name}
})