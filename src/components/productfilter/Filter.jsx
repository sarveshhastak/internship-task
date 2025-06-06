import React from 'react'
import Section_One_Product from './Section_One_Product'
import Section_Two_Filter from './Section_Two_Filter'

const Filter = () => {
    return <>
        <div style={{ height: "80px", backgroundColor: "#f6f3f9" }}>
            <div className='mx-5' style={{ color: "#4f3267" }}>
                <h4 className='text-opacity-50 '>Jwellery 298</h4>
                <p className='text-opacity-50'>Home / Jwellery</p>
            </div>
        </div>

        <div className='d-md-none mt-5 mx-4'>
            <button className='btn btn-sm btn-warning' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">More Filter</button>
        </div>
        <div className="container-fluid">
            <div className="row ">
                <div className=" col-md-2">
                    <div className='d-none d-md-block'>
                        <Section_Two_Filter />
                    </div>
                </div>
                <div className="col-10">
                    <Section_One_Product />
                </div>
            </div>
        </div>

        {/* filter offcanvas */}


        <div class="offcanvas offcanvas-start" id="offcanvasExample">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>
            <div class="offcanvas-body">
                <Section_Two_Filter />
            </div>
        </div >

    </>
}

export default Filter