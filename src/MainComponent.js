import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'
import './Assets/MainCSS.css'
import item1 from "./Assets/Images/Lunchboxheader.jpeg"
import Menu from './Menu'
import Cart from './Cart'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const url = "http://food-power.glitch.me/restaurant"

class MainComponent extends Component {
    state = {
        apiitems: [],
        cart: {},
        restaurant: []
    }

    getUserData = (restaurantID) => {
        const self = this
        axios.get(`${url}/${restaurantID}`)
            .then(function (response) {
                // handle success
                console.log("response",response);
                self.setState({ 
                    apiitems: response.data.data.menu.items,
                    restaurant: response.data.data
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    addItem = (itemName) => {
        console.log(itemName, this.state.cart)
        this.setState(
            {
                cart: {
                    ...this.state.cart,
                    [itemName]: (this.state.cart[itemName] || 0) + 1
                }
            }
        )
    }

    subtractItem = (itemName) => {
        console.log(itemName, this.state.cart)
        this.setState({
            cart: {
                ...this.state.cart,
                [itemName]: this.state.cart[itemName] - 1
            }
        })
    }

    componentDidMount() {
        console.log("match",this.props)
        let id = this.props.match.params.rid  //here we are fetvhing the value of restaurant id that we have passed from restaurants.js through match.params which is provided by withrouter
        this.getUserData(id);
    }

    render() {
        const { apiitems, restaurant } = this.state
        console.log('resta - >',this.props, this.state)
        console.log("getdata",this.getUserData)
        return (
            <div>
                <Header />
                <div className="LunchBox-header">
                    <div className="fix1">
                        <img src={restaurant.imageURL || `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${restaurant.cloudinaryImageId}`} width="254px" height="165px" alt="item1" />
                        <div className="Lheader">
                            <div className="LunchBox">
                                <h1>{restaurant.name}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Main">
                    <div className="DishBox">
                        <Menu items={apiitems}  />
                        {/* cart={cart} add={this.addItem} subtract={this.subtractItem} */}
                    </div>
                    <div className="CartBox">
        <h1>Cart {Object.values(this.props.cart).reduce( (count, i) => count+i, 0 )}</h1>
                        <Cart  />
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (store) => {
    return {
        cart : store.cart
    }
}

export default withRouter(connect(mapStateToProps,null)(MainComponent))