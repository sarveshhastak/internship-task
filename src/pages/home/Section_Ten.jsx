import React from 'react'

const Section_Ten = () => {
    return <>
        <div className="container-fluid">
            <div className="row g-0">
                <div className="col-12 col-md-6">
                    <video
                        loop
                        autoPlay
                        playsInline
                        muted
                        className='img-fluid rounded-start-3 w-100 h-100 object-fit-cover'
                        src="https://assets.cltstatic.com/images/responsive/hp/Nearby-Store-Video.mp4"
                    ></video>
                </div>
                <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center text-center rounded-end-3" style={{ backgroundColor: "#ffede5" }}>
                    <h1 className='mx-3 mb-4'>Find your favorite designs at a Store Nearby</h1>
                    <div className="input-group w-75">
                        <input type="text" className="form-control rounded-start-2" placeholder="Enter location" />
                        <span className="input-group-text bg-white rounded-end-2" style={{ cursor: 'pointer', color: "#ff8e5e" }}>change</span>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Section_Ten