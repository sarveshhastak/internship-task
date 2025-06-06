import img from "./../../assets/flag.png"
import logo from "./../../src/../assets/pngwing.com.png"
import { Link } from 'react-router-dom';
import { FaCartShopping, FaHeart } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import { useSelector } from "react-redux";

const Navbar = () => {
    const cart = useSelector(state => state.cart.quantity)
    return (
        <nav className="navbar bg-light position-sticky top-0" style={{ zIndex: 2 }}>
            <div className="container-fluid d-flex flex-wrap align-items-center justify-content-between">

                <div className="d-flex align-items-center flex-nowrap flex-grow-1 me-3">
                    <a className="navbar-brand me-3 mb-0" href="#">
                        <img src={logo} height={40} alt="Logo" />
                    </a>

                    <div className="input-group w-100">
                        <input
                            className="form-control"
                            style={{ border: '1px solid #e56eeb', height: '38px', maxWidth: 700 }}
                            type="text"
                            placeholder="Search..."
                        />
                        <button type="button" className="btn" style={{ height: '38px', backgroundColor: "#e56eeb" }}>
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                </div>

                <div className="d-flex align-items-center mt-2 mt-lg-0 flex-shrink-0">

                    <a className="me-2 d-none d-md-block">
                        <img
                            className='rounded-2'
                            style={{ padding: 8, height: 38, border: '1px solid #e56eeb' }}
                            src="https://caratlane-live-product-images.s3.ap-south-1.amazonaws.com/media/static/images/discovery/responsive-hamburger-menu/products-and-services/pop-1x.png"
                            alt="Service Icon"
                        />
                    </a>

                    <a className="me-2 d-none d-md-block">
                        <img
                            className="rounded-2"
                            style={{ border: '1px solid #B08700', height: 38, padding: 8, marginRight: 200 }}
                            src="https://cdn.caratlane.com/static/images/discovery/responsive-hamburger-menu/egold-1x.png"
                            alt="E-Gold"
                        />
                    </a>

                    <img
                        src={img}
                        alt="Indian Flag"
                        height="25"
                        width="45"
                        className="me-4 d-none d-md-block rounded-2 shadow-lg"
                    />

                    <Link className="me-4">
                        <IoPerson size={20} color="#4f3267" />
                    </Link>
                    <Link className="me-4">
                        <FaHeart size={20} color="#4f3267" />
                    </Link>
                    <Link className="me-2">
                        <FaCartShopping size={20} color="#4f3267" />
                        <strong > {cart}</strong>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;