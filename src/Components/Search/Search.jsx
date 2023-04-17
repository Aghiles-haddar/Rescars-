import React, { useEffect } from "react";
import './Search.css'
import { FaSearch } from "react-icons/fa";
import Aos from "aos";
import 'aos/dist/aos.css'

const Search = () => {
    


    useEffect(()=>{
        Aos.init(
            {
                duration: 1000
            }
        )
        }, [])
    
    return (
        <div className="search">
            <div className="secContainer container">
            <h3 data-aos='fade-up' className="title">
                Which vehicle you are looking for?
            </h3>

            <div className="searchDiv grid">
                <input data-aos='fade-up' type="text" placeholder="Type" />
                <input data-aos='fade-up' type="text" placeholder="Year" />
                <input data-aos='fade-up' type="text" placeholder="Model" />
                <input data-aos='fade-up' type="text" placeholder="Price" />
                <button data-aos='fade-up' className="btn primaryBtn flex">
                    <FaSearch className="icon" />
                    <span>
                        Search
                    </span>
                </button>
            </div>

            </div>
        </div>
    )
}

export default Search;