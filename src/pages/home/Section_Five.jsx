import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
const Section_Five = () => {
    return <>
        <div className='d-flex justify-content-evenly align-items-center' style={{ backgroundColor: "#f6f3f9", height: 90 }}>
            <div>
                <i style={{ color: "purple" }} class="bi bi-currency-exchange fs-2"> </i>
                <strong style={{ color: "purple" }}>15 Day Exchange</strong>
            </div>
            <div>
                <i style={{ color: "purple" }} class="bi bi-calendar4-event fs-2"> </i>
                <strong style={{ color: "purple" }}>1 Year Warranty</strong>
            </div>
            <div>
                <i style={{ color: "purple" }} class="bi bi-patch-check fs-2"> </i>
                <strong style={{ color: "purple" }}>100 % Certified</strong>
            </div>
            <div>
                <i style={{ color: "purple", }} class="bi bi-arrow-repeat fs-2"> </i>
                <strong style={{ color: "purple" }}>Life Time Exchange</strong>
            </div>

        </div>
    </>
}

export default Section_Five