import React from 'react';
import { FaHome } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdLocalPrintshop } from "react-icons/md";

function Footer() {
  return (
    <div>
      <footer className='bg-secondary text-white pt-5 pb-4'>
            <div className='container text-center text-md-left'>
                <div className='row text-center text-md-left'>
                    <div className='col-md-3 col-lg-3 mx-auto mt-3'>
                        <h5 className='text-uppercase mb-4 font-weight-bold text-dark'>E-commerce</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className='col-md-2 col-lg-2 mx-auto mt-3'>
                        <h5 className='text-uppercase text-weight-bold text-dark'>Products</h5>
                        <p>
                            <a className='text-white' href='#' style={{textDecoration:"none"}}>The providers</a>
                        </p>
                        <p>
                            <a className='text-white' href='#' style={{textDecoration:"none"}}>Createvity</a>
                        </p>
                        <p>
                            <a className='text-white' href='#' style={{textDecoration:"none"}}>Details</a>
                        </p>
                    </div>
                    <div className='col-md-2 col-lg-2 mx-auto mt-3'>
                    <h5 className='text-uppercase text-weight-bold text-dark'>Useful Links</h5>
                        <p>
                            <a className='text-white' href='#' style={{textDecoration:"none"}}>Shiping Rate</a>
                        </p>
                        <p>
                            <a className='text-white' href='#' style={{textDecoration:"none"}}>Become Affiliates</a>
                        </p>
                        <p>
                            <a className='text-white' href='#' style={{textDecoration:"none"}}>Help</a>
                        </p>
                    </div>
                    <div className='col-md-4 col-lg-3 mx-auto mt-3'>
                        <h5 className='text-uppercase mb-4 text-weight-bold text-dark'>Contact</h5>
                        <p>
                            <i className='mr-3' ><FaHome/></i> New York, US
                        </p>
                        <p>
                            <i className='mr-3'><SlEnvolope/></i> commercejs123@gmail.com
                        </p>
                        <p>
                            <i className='mr-3'><FaPhoneAlt/></i> +9217789330
                        </p>
                        <p>
                            <i className='mr-3'><MdLocalPrintshop/></i> +013 876 97
                        </p>
                    </div>
                </div>
                <hr className='mb-3'></hr>
                <div className='row align-items-center'>
                    <div className='col-md-7 col-lg-8'>
                        <p>Copy right @2023 All rights reserver by:
                            <a href='#' style={{textDecoration:"none"}}>
                                <strong className='text-warning'>commerce js</strong>
                            </a>
                        </p>
                    </div>
                    <div className='col-md-5 col-lg-4'>
                        <div className='text-center text-md-right'>
                            <ul className='list-unstyled list-inline mr-3'>
                                <li className='list-inline-item'>
                                    <a href='#' className='btn-floating btn-sm text-white' style={{fontSize:23}}><i ><FaFacebookSquare/></i></a>
                                </li>
                                <li className='list-inline-item'>
                                    <a href='#' className='btn-floating btn-sm text-white' style={{fontSize:23}}><i ><FaTwitter/></i></a>
                                </li>
                                <li className='list-inline-item'>
                                    <a href='#' className='btn-floating btn-sm text-white' style={{fontSize:23}}><i ><FaYoutube/></i></a>
                                </li>
                                <li className='list-inline-item'>
                                    <a href='#' className='btn-floating btn-sm text-white' style={{fontSize:23}}><i ><FaInstagram/></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                     </div>
            </div>

        </footer>
    </div>
  )
}

export default Footer;
