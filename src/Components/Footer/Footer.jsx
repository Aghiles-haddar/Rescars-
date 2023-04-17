import React from "react";
import './Footer.css'

const Footer = () => {

    
    return (
        <div className="footer">
            <div className="footerContainer container">
                <div className="footerMenuDiv grid">
                    {/* single card */}
                    <div className="singleGrid">
                        <span className="footerTitle">
                            About
                        </span>
                        <ul className="footerUl grid">
                            <li className="footerLi">
                                How it works
                            </li>
                            <li className="footerLi">
                                Careers
                            </li>
                            <li className="footerLi">
                                Affliates
                            </li>
                            <li className="footerLi">
                                Media
                            </li>
                        </ul>
                    </div>

                    {/* single card 2*/}
                    <div className="singleGrid">
                        <span className="footerTitle">
                            Become Seller
                        </span>
                        <ul className="footerUl grid">
                            <li className="footerLi">
                                Add Vehicles
                            </li>
                            <li className="footerLi">
                                Ressource center
                            </li>
                            <li className="footerLi">
                                Bonds
                            </li>
                            <li className="footerLi">
                                Release Dates
                            </li>
                        </ul>
                    </div>

                    {/* single card 3*/}
                    <div className="singleGrid">
                        <span className="footerTitle">
                            Community
                        </span>
                        <ul className="footerUl grid">
                            <li className="footerLi">
                                Recomendations
                            </li>
                            <li className="footerLi">
                                Gift Cards
                            </li>
                            <li className="footerLi">
                                Top Ups
                            </li>
                            <li className="footerLi">
                                Selling
                            </li>
                        </ul>
                    </div>

                    {/* single card 4*/}
                    <div className="singleGrid">
                        <span className="footerTitle">
                            Booking Support 
                        </span>
                        <ul className="footerUl grid">
                            <li className="footerLi">
                                Updates for Covid-19
                            </li>
                            <li className="footerLi">
                                Help center
                            </li>
                            <li className="footerLi">
                                Garages
                            </li>
                            <li className="footerLi">
                                Trust & Safety
                            </li>
                        </ul>
                    </div>
                </div>

                


                {/*footer lower section*/}
                <div className="lowerSection grid">
                    <p>2023 All right reserved</p>
                    <blockquote>Haddar Projects</blockquote>
                </div>
            </div>
        </div>
    )
}

export default Footer;