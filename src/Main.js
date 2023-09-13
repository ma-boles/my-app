import React from "react";
import MenuCard from "./MenuCard";
import TestimonialCard from "./TestimonialCard";
import Chefs from "./images/Mario and Adrian b.jpg";

export default function Main() {
    return (
        <>
        
            <section className="specials--section">
                <heading className="specials--heading">
                    <h2>Specials</h2>
                    <button>Online Menu</button>
                </heading>
                <aside className="menu--card">
                    <MenuCard />
                </aside>
            </section>
              
            <section className="testimonials">
                <heading className="testimonials--heading">
                    <h3>Testimonials</h3>
                </heading>
                <aside className="testimonials--card">
                    <TestimonialCard />
                </aside>
            </section>
            <section className="about">
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
