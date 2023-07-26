import React from "react";
import Featured from "./FeaturedPost";
import Footer from "./Footer";
import './home.css'
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../Images/slider1.png';
import stat1 from '../Images/Static_section/stat1.png';
import stat2 from '../Images/Static_section/stat2.png';
import stat3 from '../Images/Static_section/stat3.png';
import morearrow from '../Images/Static_section/morearrow.png';




function Home() {

    const getCurrentDateInput = () => {

        const dateObj = new Date();

        // get the month in this format of 04, the same for months
        const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
        const day = ("0" + dateObj.getDate()).slice(-2);
        const year = dateObj.getFullYear();

        const shortDate = `${day}-${month}-${year}`;

        return shortDate;
    };

    return (
        <>
            <div className="topics">
                <div className="topics_content">POPULAR TOPICS</div>
                <div className="topic_menu">
                    <div className="arrow"></div>

                    <ul>
                        <li style={{ width: 190 }}>Location Insight</li>
                        <li style={{ width: 190 }}>Industry Updates</li>
                        <li style={{ width: 172 }}>Medical Career</li>
                        <li style={{ width: 172 }}>Trending News</li>
                        <li style={{ width: 95, left: 1674 }}>FAQ</li>
                    </ul>

                    <div className="arrow_right"></div>
                </div>
            </div>

            <div className="carousel_Content">
                <Carousel>
                    <Carousel.Item interval={50000}>
                        <img
                            className="d-block w-100"
                            src={slider1}
                            alt="Image One"
                        />
                        <div className="carousel_txt1">Get on board with the</div>
                        <div className="carousel_txt2">Medfuture <br /> Doctors Global Community</div>
                        <div className="carousel_txt3">A global network and dynamic pool of doctors from across the globe.</div>
                        <div className="knomButton" >
                            <div className="knomButton_wrapper" />
                            <div className="knomButton_content">Know More</div>
                        </div>
                        <span aria-hidden="true" class="carousel-control-prev-icon"></span>
                        <span class="visually-hidden">Previous</span>
                    </Carousel.Item>
                    <Carousel.Item interval={50000}>
                        <img
                            className="d-block w-100"
                            src={slider1}
                            alt="Image Two"
                        />
                        <div className="carousel_txt1">Get on board with the</div>
                        <div className="carousel_txt2">Medfuture <br /> Doctors Global Community</div>
                        <div className="carousel_txt3">A global network and dynamic pool of doctors from across the globe.</div>
                        <div className="callButton" >
                            <div className="callButton_wrapper" />
                            <div className="callButton_content">Call Now</div>
                        </div>
                        <span aria-hidden="true" class="carousel-control-next-icon"></span><span class="visually-hidden">Next</span>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="jobBox">
                <Carousel>
                    <Carousel.Item interval={50000}>

                        <div className="jobtxt1">Jobs Of The Week</div>
                        <div className="jobtxt2">General Dentist – Permanent – Contractor - Adelaide</div>
                        <div className="jobtxt3">{getCurrentDateInput()}</div>
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="" aria-label="Slide 1" aria-current="true" class="active"></button>
                            <button type="button" data-bs-target="" aria-label="Slide 2" aria-current="false"></button>
                        </div>

                    </Carousel.Item>

                    <Carousel.Item interval={50000}>

                        <div className="jobtxt1">Jobs Of The Week</div>
                        <div className="jobtxt2">General Dentist – Permanent – Contractor - Adelaide</div>
                        <div className="jobtxt3">{getCurrentDateInput()}</div>
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="" aria-label="Slide 1" aria-current="true" class="active"></button>
                            <button type="button" data-bs-target="" aria-label="Slide 2" aria-current="false"></button>
                        </div>
                    </Carousel.Item>

                </Carousel>
            </div>
            <div className="featuredPost">
                <Featured />
            </div>
            <div className="cover">
                <div class="coverContent">
                    <div class="cover-heading">Be in the loop with our
                        monthly newsletter packed with the latest job opportunities, industrial insights and updates.</div>
                </div>
            </div>
            <div className="subButton" >
                <div className="subButton_wrapper" />
                <div className="subButton_content">Subscribe</div>
            </div>
            <div className="staticSec">
                <div className="ststHeader">Location Insights</div>
                <div className="statcard">

                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            
                                <div class="satcard">
                                    <img src={stat1} />
                                    <div class="stdetaibody">
                                        <small className="card-view">20 Views</small>
                                        <div>
                                            <div className="card-text">Building Your Speech Pathology Career In New Zealand</div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="morebt">
                                                <div className="morebtn-txt">Read More <img src={morearrow} /></div>
                                            </div>
                                        </div>
                                    </div>
                                
                            </div>
                            
                                <div class="satcard">
                                    <img src={stat2} />
                                    <div class="stdetaibody">
                                        <small className="card-view">20 Views</small>
                                        <div>
                                            <div className="card-text">Building Your Speech Pathology Career In New Zealand</div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="morebt">
                                                <div className="morebtn-txt">Read More <img src={morearrow} /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                <div class="satcard">
                                    <img src={stat3} />
                                    <div class="stdetaibody">
                                    <small className="card-view">20 Views</small>
                                        <div>
                                            <div className="card-text">Building Your Speech Pathology Career In New Zealand</div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="morebt">
                                                <div className="morebtn-txt">Read More <img src={morearrow} /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           
                        </div>

                </div>
            </div>
            <div className="footersection">
                <Footer/>
            </div>



        </>
    );

}

export default Home;

