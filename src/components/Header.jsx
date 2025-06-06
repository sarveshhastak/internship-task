





import React from 'react';
import "./Header.css"
import Ring from '../pages/navbarppages/Ring';
import Earrings from '../pages/navbarppages/Earrings';
import Bracelets from '../pages/navbarppages/Bracelets';
import Necklaces from '../pages/navbarppages/Necklaces';
import Pendants from '../pages/navbarppages/Pendants';
import More_Jewellery from '../pages/navbarppages/More_Jewellery';
import Silver from '../pages/navbarppages/Silver';
import Gifting from '../pages/navbarppages/Gifting';
import Trending from '../pages/navbarppages/Trending';
import Collections from '../pages/navbarppages/Collections';
import { Link } from 'react-router-dom';
import Mangalsutras from '../pages/navbarppages/Mangalsutras';

const Header = () => {

    return <>
        <nav style={{ backgroundColor: "#4f3267" }} className="navbar-bg navbar navbar-expand-lg navbar-dark sticky-top z-50">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">


                        <div className="c-dropdown">
                            <span className="text-white nav-link" role="button" id="earringsDropdown">
                                Rings
                            </span>
                            <ul className="dropdown-menu w-100" aria-labelledby="earringsDropdown">
                                <Ring />
                            </ul>
                        </div>


                        <div className="c-dropdown me-2">
                            <span className="text-white nav-link" role="button" id="earringsDropdown">
                                Earrings
                            </span>
                            <ul className="dropdown-menu w-100" aria-labelledby="earringsDropdown">
                                <Earrings />
                            </ul>
                        </div>


                        <div className="c-dropdown me-2">
                            <span className="text-white nav-link" role="button" id="braceletsDropdown">
                                Bracelets & Bangles
                            </span>
                            <ul className="dropdown-menu w-100" aria-labelledby="braceletsDropdown">
                                <Bracelets />
                            </ul>
                        </div>


                        <div className="c-dropdown me-2">
                            <span className="text-white nav-link" role="button" id="solitairesDropdown">
                                Solitaires
                            </span>
                            <ul className="dropdown-menu w-100" aria-labelledby="solitairesDropdown">
                                <Necklaces />
                            </ul>
                        </div>



                        <div className="c-dropdown me-2">
                            <span className="text-white nav-link" role="button" id="solitairesDropdown">
                                Mangalsutras
                            </span>
                            <ul className="dropdown-menu w-100" aria-labelledby="solitairesDropdown">
                                <Mangalsutras />
                            </ul>
                        </div>



                        <div className="c-dropdown me-2">
                            <span className="text-white nav-link" role="button" id="necklacesDropdown">
                                Necklaces & Pendants
                            </span>
                            <ul className="dropdown-menu w-100" aria-labelledby="necklacesDropdown">
                                <Pendants />
                            </ul>
                        </div>


                        <div className="c-dropdown me-2">
                            <span className="text-white nav-link" role="button" id="moreJewelleryDropdown">
                                More Jewellery
                            </span>
                            <ul className="dropdown-menu w-100" aria-labelledby="moreJewelleryDropdown">
                                <More_Jewellery />
                            </ul>
                        </div>


                        <div className="c-dropdown me-2">
                            <span className="text-white nav-link" role="button" id="silverDropdown">
                                Silver by Shaya
                            </span>
                            <ul className="dropdown-menu w-100" aria-labelledby="silverDropdown">
                                <Silver />
                            </ul>
                        </div>


                        <div className="c-dropdown me-2">
                            <span className="text-white nav-link" role="button" id="giftingDropdown">
                                Gifting
                            </span>
                            <ul className="dropdown-menu w-100" aria-labelledby="giftingDropdown">
                                <Gifting />
                            </ul>
                        </div>


                        <div className="c-dropdown me-2">
                            <span className="text-white nav-link" role="button" id="trendingDropdown">
                                Trending
                            </span>
                            <ul className="dropdown-menu w-100" aria-labelledby="trendingDropdown">
                                <Trending />
                            </ul>
                        </div>


                        <div className="c-dropdown me-3">
                            <span className="text-white nav-link" role="button" id="collectionsDropdown">
                                Collections
                            </span>
                            <ul className="dropdown-menu w-100" aria-labelledby="collectionsDropdown">
                                <Collections />
                            </ul>
                        </div>


                        <div className="s-dropdown">
                            <button className="btn btn-outline-light rounded-4 dropdown-toggle " type="button" id="dropdownMenuButton1" aria-expanded="false">
                                Services
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><Link className="dropdown-item">Try at Home</Link></li>
                                <li><Link className="dropdown-item">Video Call</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    </>
};

export default Header;





