import React from "react";
import { Link } from "react-router";

function Nav() {
  return (
    <nav className="nav">
      <Link to="/">CRYPTO PRICES</Link>
      <Link to="/currencies">CURRENCIES</Link>
    </nav>
  );
}
export default Nav;
