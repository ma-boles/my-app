import React from "react";
import Chefs from "../images/Mario and Adrian b.jpg";


export default function AboutPage () {
    return(
        <>
        <section className="about">
            <h1>About</h1>
                <aside className="about--content">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget dolor morbi non arcu risus quis. Pellentesque habitant morbi tristique senectus. Quis risus sed vulputate odio ut enim blandit volutpat. Massa tincidunt nunc pulvinar sapien.</p>
                </aside>
                <img src={Chefs} className="img--about"></img>
        </section>
        </>
    )
}