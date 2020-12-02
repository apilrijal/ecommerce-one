import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link exact to="/">
        <img src={Logo} alt="ecommerce-logo" className="header_logo" />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <Link exact to="/search">
          <SearchIcon className="header_searchIcon" />
        </Link>
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_options">
            <span className="header_optionLineOne">
              Hello, {user ? user.email : "Guest"}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header_options">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">Orders</span>
          </div>
        </Link>
        <div className="header_options">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Portal</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <LocalMallIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
