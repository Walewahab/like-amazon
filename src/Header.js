import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { useStateValue } from "./StateProvider";


const Header = () => {
  const [{ basket, user }] = useStateValue();
  return (
    <nav className="header">
      {/* logo on the left -> img */}
      <Link to="/">
      <img className="header__logo"src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='' />
      </Link>
      {/* Search box */}
      <div className="header__search">
      <input type="text" className="header__searchInput" />
      <Avatar className="header__searchIcon" />
      </div>
      {/* 3 link */}
      <div className="header__nav">
        {/* 1st link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
          <span className="header__optionLineOne">Hello {user?.email}</span>
          <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign in'}</span>
          </div>
        </Link>
         {/* 2nd link */}
         <Link to="/login" className="header__link">
          <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
         {/* 1st link */}
         <Link to="/login" className="header__link">
          <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        {/* 4th link */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <Avatar />
            <span className="header__basketCount">{basket.lenght}</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header;