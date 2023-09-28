import React from "react";
import Image from "../images/restaurant.jpg";

export default function Footer() {
    return (
        <div div className="footer">
            <footer>
                <figure>
                    <img src={Image} className="footer--img"></img>
                </figure>
                <ul>
                    <h4>Doormat Navigation</h4>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
                <ul>
                    <h4>Contact</h4>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
                <ul>
                    <h4>Social Media Links</h4>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </footer>
        </div>
    )
}