import React from 'react';
import "./Footer.css";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer_container">
      <section className="footer_subscription">
      <Link to="/home"><button>Back to top</button></Link>
      </section>
      <div className='underline' />
      <div className="footer">
         <div className="footer_wrapper">
            <div className="row">
            <div className="footer_column">
               <h2>Get to Know Us</h2>
               <Link to="/">Careers</Link>
               <Link to="/">Blog</Link>
               <Link to="/">About Amazon</Link>
               <Link to="/">Investor Relations</Link>
               <Link to="/">Amazon Devices</Link>
               <Link to="/">Amazon Science</Link>
            </div>

            <div className="footer_column">
               <h2>Make Money with Us</h2>
               <Link to="/">Sell products on Amazon</Link>
               <Link to="/">Sell on Amazon Business</Link>
               <Link to="/">Sell apps on Amazon</Link>
               <Link to="/">Become an Affiliate</Link>
               <Link to="/">Advertise Your Products</Link>
               <Link to="/">Self-Publish with Us</Link>
               <Link to="/">Host an Amazon Hub</Link>
               <Link to="/">See More Make Money with Us</Link>
            </div>

            <div className="footer_column">
               <h2>Amazon Payment Products</h2>
               <Link to="/">Amazon Business Card</Link>
               <Link to="/">Shop with Points</Link>
               <Link to="/">Reload Your Balance</Link>
               <Link to="/">Amazon Currency Converter</Link>
            </div>

            <div className="footer_column">
               <h2>Let Us Help You</h2>
               <Link to="/">Amazon and COVID-19</Link>
               <Link to="/">Your Account</Link>
               <Link to="/">Your Orders</Link>
               <Link to="/">Shipping Rates & Policies</Link>
               <Link to="/">Returns & Replacements</Link>
               <Link to="/">Manage Your Content and Devices</Link>
               <Link to="/">Amazon Assistant</Link>
               <Link to="/">Help</Link>
            </div>
         </div>
         </div>
      </div>
      <div className="footer-bottom">
                    <p>
                        &copy;{new Date().getFullYear()} walewahab App - All Rights
                    </p>
      </div>
    </div>
  )
}

export default Footer;