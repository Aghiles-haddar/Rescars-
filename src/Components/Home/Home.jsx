import React, { useEffect } from "react";
import './Home.css'
import rs6 from '../../images/rs6.png'

import Aos from "aos";
import 'aos/dist/aos.css'

const Home = () => {

    useEffect(()=>{
    Aos.init(
        {
            duration: 1000
        }
    )
    }, [])

    return (
        <div className="home">
            <div className="secContainer">

                <div data-aos='fade-up' className="homeText">
                    <span className="homeSpan">
                        Meet your new car
                    </span>
                    <h1 className="homeTitle"> 
                        Audi RS7 Sportback
                    </h1>
                    <div className="btns flex">
                        <button data-aos='fade-right' className="btn">More Details</button>
                        <button data-aos='fade-left' className="btn primaryBtn">Test Drive</button>
                    </div>
                </div>

                <div data-aos='fade-down-right' className="homeImage">
                    <img src={rs6} alt="home page" />
                </div>

            </div>
        </div>
    )
}

export default Home;