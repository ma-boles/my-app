import React from "react";
import Food  from "../images/restauranfood.jpg";
import { Link } from "react-router-dom";


export default function Hero () {
    return (
        <>
        <section className="header">
            <div className="content">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to="../BookingPage">
                    <button className="button--header">Reserve A Table</button>
                </Link>
            </div>
            <figure className="figure--hero">
                <img src={Food} className="img--food"></img>
            </figure>
        </section>
        </>
    )
}