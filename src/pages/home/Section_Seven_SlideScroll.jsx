import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section_Seven_SlideScroll = () => {
    const [display, setDisplay] = useState(true);
    const [width, setWidth] = useState(1200);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: "#ece5ff" }}>
                <h1 className="text-center pt-5 my-5">CaratLane Collections</h1>
                <div className="mx-5" style={{ display: display ? "block" : "none" }}>
                    <Slider {...settings}>
                        <div>
                            <img
                                className="img-fluid rounded-4 border border-5"
                                src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/others/collection/luna_d.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="img-fluid rounded-4 border border-5"
                                src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/others/collection/01/adaa_d.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="img-fluid rounded-4 border border-5"
                                src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/others/collection/butterfly_d.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="img-fluid rounded-4 border border-5"
                                src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/others/collection/aaranya_d.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="img-fluid rounded-4 border border-5"
                                src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/others/collection/eternity_d.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="img-fluid rounded-4 border border-5"
                                src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/others/collection/ombre_d.jpg"
                                alt=""
                            />
                        </div>
                    </Slider>
                </div>
                <div className="text-center">
                    <button style={{ backgroundColor: "#4f3267" }} type="button" class="btn btn-lg text-light my-5 w-25">VIEW ALL COLLECTIONS</button>
                </div>
            </div>
        </>
    );
};


export default Section_Seven_SlideScroll