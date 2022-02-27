import React from "react";

const NavBar = () => {
  return (
    <nav style={{color: "white", backgroundColor: "black", padding: "1px", display: "flex", flexDirection: "row", margin: "0", justifyContent: "space-around"}}>
			<ul href="home">HOME</ul>
			<ul href="beauty">BEAUTY</ul>
      <ul href="health">HEALTH & WELLNESS</ul>
      <ul href="travel">TRAVEL</ul>
      <ul href="tech">TECH TALK</ul>
    </nav>
  );
};
export default NavBar;

