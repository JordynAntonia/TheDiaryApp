import React from "react";

const NavBar = () => {
  return (
    <nav classname="navbar" display="flex" text-align="center" justify-content="space-around">
  		<a href="home">HOME</a>
			<a href="beauty">BEAUTY</a>
      <a href="health">HEALTH & WELLNESS</a>
      <a href="travel">TRAVEL</a>
      <a href="tech">TECH TALK</a>
    </nav>
  );
};
export default NavBar;
