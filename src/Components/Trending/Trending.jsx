import React from "react";
import './Trending.css'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Urus from '../../images/urus.png'


const Trending = () => {
    return (
        <div className="trending section">
            <div className="secContainer container">
                <div className="secHeading flex">
                    <h3 className="secTitle">
                        Trending Near You
                    </h3>

                    <div className="navBtns flex">
                        <FaArrowLeft className="icon leftIcon"/>
                        <FaArrowRight className="icon rightIcon"/>
                    </div>
                </div>

                <div className="carContainer grid">
                    {/* Signle Car */}
                    {/* Car one */}
                    <div className="singleCar grid">
                        <div className="imgDiv">
                            <img src={Urus} alt="" />
                        </div>
                        <h5 className="carTitle">
                            Used 2019 Audi S4 Premium Plus
                        </h5>
                        <span className="miles">
                            11457 Miles
                        </span>
                        <span className="AWD">
                            AWD 4-Cylinder Turbo
                        </span>
                        <div className="price_seller flex">
                            <span className="price">
                                41,234€
                            </span>
                            <span className="seller">
                                Best Seller
                            </span>
                        </div>
                    </div>

                    {/* Car one */}
                    <div className="singleCar grid">
                        <div className="imgDiv">
                            <img src={Urus} alt="" />
                        </div>
                        <h5 className="carTitle">
                            Used 2019 Audi S4 Premium Plus
                        </h5>
                        <span className="miles">
                            11457 Miles
                        </span>
                        <span className="AWD">
                            AWD 4-Cylinder Turbo
                        </span>
                        <div className="price_seller flex">
                            <span className="price">
                                41,234€
                            </span>
                            <span className="seller">
                                Best Seller
                            </span>
                        </div>
                    </div>

                    {/* Car one */}
                    <div className="singleCar grid">
                        <div className="imgDiv">
                            <img src={Urus} alt="" />
                        </div>
                        <h5 className="carTitle">
                            Used 2019 Audi S4 Premium Plus
                        </h5>
                        <span className="miles">
                            11457 Miles
                        </span>
                        <span className="AWD">
                            AWD 4-Cylinder Turbo
                        </span>
                        <div className="price_seller flex">
                            <span className="price">
                                41,234€
                            </span>
                            <span className="seller">
                                Best Seller
                            </span>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default Trending;