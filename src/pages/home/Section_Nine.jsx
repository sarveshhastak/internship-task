import React from 'react'

const Section_Nine = () => {
    return <>
        <div className='container-fluid my-5'>
            <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-md-6">
                                <img
                                    src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/PoP/01/Desktop_Slider.jpg"
                                    className="d-block w-100 rounded-4"
                                    alt="Image 1"
                                />
                            </div>
                            <div className="col-md-6">
                                <img
                                    src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/Banner/kids/01/SC_desktop.jpg"
                                    className="d-block w-100 rounded-4"
                                    alt="Image 2"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-md-6">
                                <img
                                    src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/05_MAY/AppBanner/02/Desktop.jpg"
                                    className="d-block w-100 rounded-4"
                                    alt="Image 3"
                                />
                            </div>
                            <div className="col-md-6">
                                <img
                                    src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/PoP/01/Desktop_Slider.jpg"
                                    className="d-block w-100 rounded-4"
                                    alt="Image 4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="carousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="carousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </>
}

export default Section_Nine