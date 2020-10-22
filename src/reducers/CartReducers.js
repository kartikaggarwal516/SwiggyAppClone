
import {INCREMENT_ITEM,DECREMENT_ITEM} from "../Actions/Actions"

//4. reducers
const defaultState = {};
export default function cartReducers(state = defaultState, action){
    switch(action.type) {
        case INCREMENT_ITEM: {            
            const newState = {
                ...state,
                [action.payload.name]: (state[action.payload.name] || 0) + 1
            }
            return newState            
        }
        case DECREMENT_ITEM: {                          
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