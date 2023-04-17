import React from "react";
import './Review.css'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Urus from '../../images/urus.png'


const Review = () => {
    return (
        <div className="review section">
            <div className="secContainer container">

                <div className="secHeading flex">
                    <h3 className="secTitle">
                        Recent Review
                    </h3>

                    <div className="navBtns flex">
                        <FaArrowLeft className="icon leftIcon"/>
                        <FaArrowRight className="icon rightIcon"/>
                    </div>
                </div>

                <div className="reviewContainer grid">
                    <div className="singleReview grid">
                        <div className="imgDiv">
                            <img src={Urus} alt="" />
                        </div>
                        <h5 className="reviewTitle">2023 Cadiallac</h5>
                        <span className="desc">
                            Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comfortable, and attractive.
                        </span>

                        <div className="reviewDiv flex">

                            <div className="leftDiv flex">
                                <div className="reviewerImage">
                                    <img src={Urus} alt="Reviewer Image" />
                                </div>
                                <div className="aboutReviewer">
                                    <span className="name">
                                        Jakline Nelson
                                    </span>
                                    <p>Chief Editor </p>
                                </div>
                            </div>

                            <div className="rightDiv flex">
                                <FaStar className="icon"/>
                                <blockquote>4.84</blockquote>
                            </div>

                        </div>
                    </div>

                    <div className="singleReview grid">
                        <div className="imgDiv">
                            <img src={Urus} alt="" />
                        </div>
                        <h5 className="reviewTitle">2023 Cadiallac</h5>
                        <span className="desc">
                            Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comfortable, and attractive.
                        </span>

                        <div className="reviewDiv flex">

                            <div className="leftDiv flex">
                                <div className="reviewerImage">
                                    <img src={Urus} alt="Reviewer Image" />
                                </div>
                                <div className="aboutReviewer">
                                    <span className="name">
                                        Jakline Nelson
                                    </span>
                                    <p>Chief Editor </p>
                                </div>
                            </div>

                            <div className="rightDiv flex">
                                <FaStar className="icon"/>
                                <blockquote>4.84</blockquote>
                            </div>

                        </div>
                    </div>

                    <div className="singleReview grid">
                        <div className="imgDiv">
                            <img src={Urus} alt="" />
                        </div>
                        <h5 className="reviewTitle">2023 Cadiallac</h5>
                        <span className="desc">
                            Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comfortable, and attractive.
                        </span>

                        <div className="reviewDiv flex">

                            <div className="leftDiv flex">
                                <div className="reviewerImage">
                                    <img src={Urus} alt="Reviewer Image" />
                                </div>
                                <div className="aboutReviewer">
                                    <span className="name">
                                        Jakline Nelson
                                    </span>
                                    <p>Chief Editor </p>
                                </div>
                            </div>

                            <div className="rightDiv flex">
                                <FaStar className="icon"/>
                                <blockquote>4.84</blockquote>
                            </div>

                        </div>
                    </div>

                    
                </div>


            </div>
        </div>
    )
}

export default Review;