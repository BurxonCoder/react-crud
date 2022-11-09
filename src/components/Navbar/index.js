import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="col-md-12 py-2">
      <nav className="navbar navbar-dark">
        <Link to={"/"} className="navbar-brand ml-5 text-white">
Saralavha 
        </Link>
        <Link to={"/"} className="navbar-brand ml-5 text-white">
Yngiliklar        </Link>
        <Link to={"/"} className="navbar-brand ml-5 text-white">
Biz haqimizda
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
