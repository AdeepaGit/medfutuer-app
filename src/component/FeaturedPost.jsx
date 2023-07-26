import React from "react";
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
import './featuredPost.css';
import Rectangle9 from '../Images/Featured_Posts/Rectangle 9.png';
import Rectangle10 from '../Images/Featured_Posts/Rectangle 10.png';
import Rectangle11 from '../Images/Featured_Posts/Rectangle 11.png';
import Rectangle12 from '../Images/Featured_Posts/Rectangle 12.png';
import morearrow from '../Images/Featured_Posts/morearrow.png';

function Featured() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <div className="header" >Featured Posts</div>
            <div className="postsCard">
                <div className="fcarousel">
                    <Carousel responsive={responsive}  >
                        <div className="featuer_card1">

                            <img src={Rectangle9} alt="" />
                            <div className="detaibody">
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
                        <div className="featuer_card1">

                            <img src={Rectangle10} alt="" />
                            <div className="detaibody">
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
                        <div className="featuer_card1">
                            <img src={Rectangle11} alt="" />
                            <div className="detaibody">
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
                        <div className="featuer_card1">

                            <img src={Rectangle12} alt="" />
                            <div className="detaibody">
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
                    </Carousel>
                </div>
            </div>

        </>
    );
}
export default Featured;
