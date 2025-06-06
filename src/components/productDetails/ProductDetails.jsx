import Section_Five_ProductDetails from "./Section_Five_ProductDetails"
import Section_Four_ProductDetails from "./Section_Four_ProductDetails"
import Section_One_ProductDetails from "./Section_One_ProductDetails"
import Section_Six_ProductDetails from "./Section_Six_ProductDetails"
import Section_ThreeProductDetails from "./Section_ThreeProductDetails"
import Section_Two_ProductDetails from "./Section_Two_ProductDetails"
import React from 'react'
const ProductDetails = () => {
    return <>
        <div className="container-fluid my-3">
            <div className="row">
                <div className="col-md-8">
                    <Section_One_ProductDetails />
                </div>
                <div className="col-md-4">
                    <Section_Two_ProductDetails />
                </div>
            </div>
        </div>
        <div className="container-fluid rounded-5">
            <Section_ThreeProductDetails />
        </div>
        <div className="container-fluid rounded-5">
            <Section_Four_ProductDetails />
        </div>
        <div className="container-fluid rounded-5">
            <Section_Five_ProductDetails />
        </div>
        <div className="container-fluid rounded-5">
            <Section_Six_ProductDetails />
        </div>
    </>
}

export default ProductDetails