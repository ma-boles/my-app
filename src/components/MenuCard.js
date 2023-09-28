import React from "react";
import GreekSalad from "../images/greek salad.jpg";
import Bruschetta from "../images/Mario and Adrian A.jpg";
import LemonDessert from "../images/lemon dessert.jpg";

export default function MenuCard () {
    return (   
    <>
    <article className="menuCard">
        <figure>
            <img src={GreekSalad} className="img--menu"></img>
        </figure>
        <div className="heading">
            <h4>Greek salad</h4>
            <p>$12.99</p>
        </div>
        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
        <h6>Order a delivery &rarr;</h6>
    </article>

    <article className="menuCard">
        <figure>
            <img src={Bruschetta} className="img--menu"></img>
        </figure>
        <div className="heading">
            <h4>Bruschetta</h4>
            <p>$5.99</p>
        </div>
        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
        <h6>Order a delivery &rarr;</h6>
    </article>

    <article className="menuCard">
        <figure>
            <img src={LemonDessert} className="img--menu"></img>
        </figure>
        <div className="heading">
            <h4>Lemon Dessert</h4>
            <p>$5.99</p>
        </div>
        <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
        <h6>Order a delivery &rarr;</h6>
    </article>
        
    </>
    )
}