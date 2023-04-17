import React from "react";
import './Sellers.css'
import mercedeslogo from '../../images/mercedeslogo.png'
import Aos from "aos";
import 'aos/dist/aos.css'
const Sellers = () => {

    

    return (
        <div className="sellers section">
            <div className="secContainer container">
                <div className="secHeading grid">
                    <h3 className="secTitle">
                        Explore top sellers in town
                    </h3>
                    <p>Joseph Samuel Girard holds the Guinness World Record for being the gretest salesman in the world.</p>
                </div>

                <div className="sellersContainer grid">
                    <div className="singleSeller flex">
                        <div className="imgDiv flex">
                            <img src={mercedeslogo} alt="" />
                        </div>
                        <span className="info">
                            <h4 className="name">
                                Toyota
                            </h4>
                            <p>from 40€</p>
                        </span>
                    </div>
                


                    <div className="singleSeller flex">
                        <div className="imgDiv flex">
                            <img src={mercedeslogo} alt="" />
                        </div>
                        <span className="info">
                            <h4 className="name">
                                Toyota
                            </h4>
                            <p>from 40€</p>
                        </span>
                    </div>



                    <div className="singleSeller flex">
                        <div className="imgDiv flex">
                            <img src={mercedeslogo} alt="" />
                        </div>
                        <span className="info">
                            <h4 className="name">
                                Toyota
                            </h4>
                            <p>from 40€</p>
                        </span>
                    </div>



                    <div className="singleSeller flex">
                        <div className="imgDiv flex">
                            <img src={mercedeslogo} alt="" />
                        </div>
                        <span className="info">
                            <h4 className="name">
                                Toyota
                            </h4>
                            <p>from 40€</p>
                        </span>
                    </div>


                    </div>
            </div>
        </div>
    )
}

export default Sellers;