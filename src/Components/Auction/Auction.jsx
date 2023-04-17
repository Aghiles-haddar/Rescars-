import React from "react";
import './Auction.css'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Urus from '../../images/urus.png'
import Dodge from '../../images/dodge.png'
import camaro from '../../images/camaro.png'
import rs7 from '../../images/rs7.png'
import bmw from '../../images/bmw.png'
import porche from '../../images/porche.png'

const Auction = () => {
    return (
        <div className="auction section">
            <div className="secContainer container">
                <div className="secHeading flex">
                    <h3 className="secTitle">
                        Active Auctions
                    </h3>

                    <div className="navBtns flex">
                        <FaArrowLeft className="icon leftIcon"/>
                        <FaArrowRight className="icon rightIcon"/>
                    </div>
                </div>

                <div className="carContainer grid singleCarActive">
                    {/* Signle Car */}
                    {/* Car one */}
                    <div className="singleCar grid">
                        <div className="imgDiv">
                            <img src={Dodge} alt="" />
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
                        <div className="price_buyBtn flex">
                            <span className="price">
                                41,234€
                            </span>
                            <span className="buyBtn">
                                Buy Now
                            </span>
                        </div>
                    </div>

                    {/* Car one */}
                    <div className="singleCar grid">
                        <div className="imgDiv">
                            <img src={camaro} alt="" />
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
                        <div className="price_buyBtn flex">
                            <span className="price">
                                41,234€
                            </span>
                            <span className="buyBtn">
                                Buy Now
                            </span>
                        </div>
                    </div>

                    {/* Car one */}
                    <div className="singleCar grid singleCarActive">
                        <div className="imgDiv">
                            <img src={rs7} alt="" />
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
                        <div className="price_buyBtn flex">
                            <span className="price">
                                41,234€
                            </span>
                            <span className="buyBtn">
                                Buy Now
                            </span>
                        </div>
                    </div>

                    {/* Car one */}
                    <div className="singleCar grid">
                        <div className="imgDiv">
                            <img src={bmw} alt="" />
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
                        <div className="price_buyBtn flex">
                            <span className="price">
                                41,234€
                            </span>
                            <span className="buyBtn">
                                Buy Now
                            </span>
                        </div>
                    </div>

                    {/* Car one */}
                    <div className="singleCar grid singleCarActive">
                        <div className="imgDiv">
                            <img src={porche} alt="" />
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
                        <div className="price_buyBtn flex">
                            <span className="price">
                                41,234€
                            </span>
                            <span className="buyBtn">
                                Buy Now
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
                        <div className="price_buyBtn flex">
                            <span className="price">
                                41,234€
                            </span>
                            <span className="buyBtn">
                                Buy Now
                            </span>
                        </div>
                    </div>

                    {/* Car one */}
                    <div className="singleCar grid singleCarActive">
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
                        <div className="price_buyBtn flex">
                            <span className="price">
                                41,234€
                            </span>
                            <span className="buyBtn">
                                Buy Now
                            </span>
                        </div>
                    </div>

                

                </div>
            </div>
        </div>
    )
}

export default Auction;