import React from 'react'
import card from "../Assets/Images/BhelPuri.jpg"
import '../Assets/Styles/MenuCSS.css'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import  {addItem} from '../Actions/Actions'
import  {subtractItem} from '../Actions/Actions'

const Menu = (props) => {
    console.log('Menu', props)
    return (
        <div className="Dishes">
            {Object.entries(props.items).map(([k, v]) => {
                return (
                    <div key={k}>
                        <div className="card" key={k}>
                            <img src={v.cloudinaryImageId 
                                ? "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+v.cloudinaryImageId
                            :card }
                             alt="swiggy order" width="254px" height="160px" />
                            <div className="cardcontent">
                                <div className="cardname">{v.name}</div>
                                <div>
                                {
                                !props.cart[v.name]
                                ? <div>
                                    <button onClick={() => props.addItem(v.name)} >Add</button>
                                </div>
                                : <div>
                                    <button onClick={() => props.addItem(v.name)}>+</button>
                                    {props.cart[v.name]}
                                    <button onClick={() => props.subtractItem(v.name)}>-</button>
                                </div>
                        }
                                </div>
                            </div>
                        </div>
                        
                    </div>
                )
            })}
        </div>
    )
}

// export default Menu

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            addItem,subtractItem
        },
        dispatch
    )

    // return {
    //     addItem : () => dispatch(addItem)
    // }
}

const mapStateToProps = (store) => {
    return {
        cart : store.cart
    }
}

// store = {            //structure of this store looks like this
//     cart : {}
// }

export default connect(mapStateToProps, mapDispatchToProps)(Menu)

{/* <button onClick={() => props.addItem(props.itemName)}>+</button>
                {props.itemName}
                <button onClick={() => props.subtract(props.itemName)}>-</button> */}
