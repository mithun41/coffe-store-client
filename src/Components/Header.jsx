import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="flex justify-end gap-6 w-11/12 mx-auto">
      <Link to={"/"}> Home</Link>

      <Link to={"/addcoffee"}>Add Coffee</Link>
      <Link to={"/users"}>Users</Link>
      <Link to={"/signin"}>Sign In</Link>
      <Link to={"/signup"}>Sign Up</Link>
    </div>
  );
};

export default Header;
