import React from 'react'
import {connect} from 'react-redux'


const Cart = (props) => (
    <div >
        {
            Object.entries(props.cart).map( ([k, v]) => (
                <div key={k}>
                    { v  !== 0
                        ? <div>{k} : {v}</div>
                        : ''
                    }
                </div>
            ))
        }
    </div>
)

const mapStateToProps = (store) => {
    return {
        cart : store.cart
    }
}

export default connect(mapStateToProps,null)(Cart)
