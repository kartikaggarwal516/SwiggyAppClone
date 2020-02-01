import React, { Component } from 'react'
import item1 from "./Assets/Images/home-header1.jpeg"
import item2 from "./Assets/Images/home-header2.jpeg"
import item3 from "./Assets/Images/home-header3.jpeg"
import item4 from "./Assets/Images/home-header4.jpeg"
import sticky1 from "./Assets/Images/Sticky1.PNG"
import slogo from "./Assets/Images/SuperNewLogo.png"
import nav1 from "./Assets/Images/nav1.png"
import nav2 from "./Assets/Images/nav2.png"
import nav3 from "./Assets/Images/nav3.png"
import nav4 from "./Assets/Images/nav4.png"
import nav5 from "./Assets/Images/nav5.png"
import nav6 from "./Assets/Images/nav6.png"
import card from "./Assets/Images/card.jpeg"
import './Assets/homeCSS.css'
import Header from './Header'
import axios from 'axios'
import Restaurants from './Restaurants'

const url = "http://food-power.glitch.me/restaurant"

class Home extends Component {
    state = {

    }

    getUserData = () => {
        const self = this
        axios.get(url)
            .then(function (response) {
                // handle success
                console.log(response);
                self.setState({ apiitems: response.data })
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
        const a = [1, 2, 3, 4, 5, 6]
        return (
            <div className="Container">
                <Header />
                <div className="home-header">
                    <div className="fix1">
                        <a href="javascript:void(0);">
                            <img src={item1} width="260px" height="260px" alt="item1" />
                        </a>
                        <a href="#">
                            <img src={item2} width="260px" height="260px" alt="item2" />
                        </a>
                        <a href="#">
                            <img src={item3} width="260px" height="260px" alt="item3" />
                        </a>
                        <a href="#">
                            <img src={item4} width="260px" height="260px" alt="item4" />
                        </a>
                    </div>
                </div>
                <div className="sticky">
                    <div className="stickyFix">
                        <div className="first">
                            <a href="#">
                                <img src={sticky1} width="80px" height="80px" alt="food" />
                            </a>
                            <div className="first-2">
                                <h3>Introducing Swiggy Pop</h3>
                                <p>Single Serve Meals, Free Delivery, No Extra Charges</p>
                            </div>
                            <button class="btn-common">
                                ORDER NOW
                            </button>
                        </div>
                        <div className="second">
                            <img src={slogo} alt="swiggy order" width="60px" height="60px" />
                            <div className="second1">
                                <h3>Introducing Swiggy Super</h3>
                                <p>The membership program you've been waiting for.
                                    Grab it at unbelievable introductory prices!
                                </p>
                            </div>
                            <button class="btn-common2">
                                GET SUPER NOW
                            </button>
                        </div>
                    </div>
                </div>
                <div className="Main">
                    <div className="nav-bar">
                        <div className="nav1">
                            <img src={nav1} alt="swiggy order" width="45px" height="45px" />
                            <div className="nav1-content">
                                <div className="c1">Offers Near You</div>
                                <p>150 OPTIONS</p>
                            </div>
                        </div>
                        <div className="nav1">
                            <img src={nav2} alt="swiggy order" width="45px" height="45px" />
                            <div className="nav1-content">
                                <div className="c1">Express Delivery</div>
                                <p>77 OPTIONS</p>
                            </div>
                        </div>
                        <div className="nav1">
                            <img src={nav3} alt="swiggy order" width="45px" height="45px" />
                            <div className="nav1-content">
                                <div className="c1">Only On Swiggy</div>
                                <p>15 OPTIONS</p>
                            </div>
                        </div>
                        <div className="nav1">
                            <img src={nav4} alt="swiggy order" width="45px" height="45px" />
                            <div className="nav1-content">
                                <div className="c1">Vegeterian Options</div>
                                <p>63 OPTIONS</p>
                            </div>
                        </div>
                        <div className="nav1">
                            <img src={nav5} alt="swiggy order" width="45px" height="45px" />
                            <div className="nav1-content">
                                <div className="c1">Pocket Friendly</div>
                                <p>71 OPTIONS</p>
                            </div>
                        </div>
                        <div className="nav1">
                            <img src={nav6} alt="swiggy order" width="45px" height="45px" />
                            <div className="nav1-content">
                                <div className="c1">What's New</div>
                                <p>5 OPTIONS</p>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="content1">
                            <div className="cheading">
                                Offers Near you
                            </div>
                            <Restaurants />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home