import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src="./Header/logo-odl.png" alt="logo" />
        </div>
        <div>LACHINCOM</div>
        <div className="menu">
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
        </div>
      </div>
    );
  }
}

export default Header;
