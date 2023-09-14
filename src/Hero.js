import React from "react";
import Food  from "./images/restauranfood.jpg";


export default function Hero () {
    return (
        <>
        <section className="header">
            <div className="content">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="button--header">Reserve A Table</button>
            </div>
            <img src={Food} className="img--food"></img>
           
        </section>
        </>
    )
}