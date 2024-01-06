import React from "react";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div>
      <img src={Logo} alt="logo-site" style={{ width: 400 }} />
    </div>
  );
};

export default Header;
