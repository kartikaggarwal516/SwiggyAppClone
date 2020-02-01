import React from 'react'
import { combineReducers } from 'redux'
import cart from './CartReducers'


//we have to import this reducer in main index.js component
export default combineReducers({  //we are defining this to uniquely identify each data
    cart:cart                      //example to identify fashion cart and grocery cart 
})