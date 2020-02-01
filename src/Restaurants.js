import React, { Component } from 'react'
import axios from 'axios'
import './Assets/homeCSS.css'
import card from "./Assets/Images/card.jpeg"
import MainComponent from './MainComponent';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const url1 = "http://food-power.glitch.me/restaurants"

class Restaurants extends Component {
    state = {
        apiitems: [],
        restaurants: []
    }

    getUserData = () => {
        const self = this
        axios.get(url1)
            .then(function (response) {
                // handle success
                console.log(response);
                self.setState({ restaurants: response.data.data })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    componentDidMount() {
        this.getUserData();
    }

    render() {
        const {restaurants}= this.state
        return (
            <div className="crestra">
                {Object.entries(restaurants).map(([k, v]) => {
                    return (<Link to={`/restaurant/${v.id}`}>
                        <div className="card" key={k}>
                        <img src={v.imageURL || `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${v.cloudinaryImageId}`} alt="swiggy order" width="254px" height="160px" />
                        <div className="cardcontent">
                            <div className="cardname">{v.name}</div>
                            <div className="cardinfo">
                                North Indian, Desserts, Biryani
                                    </div>
                        </div>
                        <div className="cardtile">
                            <div className="rating">
                                <span className="star">
                                    ★
                                                </span>
                                <span>4.5</span>
                            </div>
                            <div>•</div>
                            <div>28 MINS</div>
                            <div>•</div>
                            <div>200 FOR TWO</div>
                        </div>
                        <div className="coupon">
                            50% off | Use coupon WELCOME50
                                        </div>
                        {/* <div className="QuickView">
                                            <span >Quick View</span>
                                        </div> */}
                    </div>
                    </Link>)
                }
                )}

            </div>
        )
    }
}

export default Restaurants