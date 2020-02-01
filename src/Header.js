import React from 'react'
import './Assets/homeCSS.css'
import SwiggyLogo from "./Assets/SVG/SwiggyLogo"
import Search from "./Assets/SVG/Search"
import Offers from "./Assets/SVG/Offers"
import Help from "./Assets/SVG/Help"
import SignIn from "./Assets/SVG/SignIn"
import Cart from "./Assets/SVG/Cart"

const Header = () => {
    return <div className="Header">
                    <div className='TopBar'>
                        <div>
                            <SwiggyLogo />
                        </div>
                        <div className="location">
                            <span>Whitefield</span>
                            <span>658, Ambedkar Nagar, Whitefield</span>
                        </div>
                        <div className='Menu'>
                            <ul>
                                <li>
                                    <div className="liclass">
                                        <Search />
                                        <span >Search</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="liclass">
                                        <Offers />
                                        <span>Offers</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="liclass">
                                        <Help />
                                        <span>Help</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="liclass">
                                        <SignIn />
                                        <span>Sign In</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="liclass">
                                        <Cart />
                                        <span>Cart</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
}

export default Header