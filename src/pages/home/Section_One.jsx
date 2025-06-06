import React from 'react'
const Section_One = () => {
    return <>

        <div id="carouselExampleCaptions" class="carousel slide my-4 mx-3" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img
                        className='d-block w-100 img-fluid rounded-3'
                        src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/05_MAY/Banner/Runway/01/Static/Desktop_Runway.jpg" alt="" />
                </div>

                <div class="carousel-item">
                    <img
                        className='d-block w-100 img-fluid rounded-3'
                        src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/05_MAY/Banner/BundleOffer/04/Desktop_1760x630.jpg" alt="" />
                </div>

                <div class="carousel-item">
                    <img
                        className='d-block w-100 img-fluid rounded-3'
                        src=" https://cdn.caratlane.com/media/static/images/V4/2025/CL/05_MAY/Banner/blog/02/Desktop_1760x630_1.jpg"
                        alt="" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" ></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" ></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>


    </>
}

export default Section_One