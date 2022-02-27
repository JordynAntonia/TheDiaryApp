import React from "react";

const AboutMe = () => {
    return (
        <div className="card" style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
            <div className="container">
                <h3> Hi, my name is Jordyn! </h3>
                <p>I'm a recent Full Stack Software Developer graduate with a passion for creating amazing technology experiences</p>
                <p>I have a background of Videography, Photography, Product Development and Digital Marketing</p>
                <p>Some of my personal intrests include beauty, traveling and trying new things. </p>
                <div className="social-links" style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                    <ul href="linkedin">LinkedIn</ul>
                    <ul href="portfolio">Portfolio</ul>
                    <ul href="tech-group">We Did It: Tech Support Group</ul>
                </div>
            </div>

        </div>
    
    
    );
};
export default AboutMe;

