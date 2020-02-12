//2.action types
export const INCREMENT_ITEM = "INCREMENT_ITEM"
export const DECREMENT_ITEM = "DECREMENT_ITEM"

//3.Action Creators
export const addItem = name => {
    console.log("addItem", name);
    return {
        type: INCREMENT_ITEM,
        payload: {name}
    }
}

export const subtractItem = name => ({  //here we are enclosing in braces bcs we r not evaluating anything as in addItem
    type: DECREMENT_ITEM,
    payload: {name}
})

//4. reducers
const defaultState = {};
export default function cartReducers(state = defaultState, action){
    switch(action.type) {
        case INCREMENT_ITEM: {
            console.log('Increment reducer', action.payload)
            console.log("State",state)
            const newState = {
                ...state,
                [action.payload.name]: (state[action.payload.name] || 0) + 1
            }
            return newState
            // return state + 1
        }
        case DECREMENT_ITEM: {
       
       
            console.log("Decrement Reducer", state)
            const newState = {
                ...state,
                [action.payload.name] : state[action.payload.name] - 1
            }
            return newState
        }
        default:
            return state
    }
}