import React from "react";
import Image from "../images/restaurant.jpg";

export default function Footer() {
    return (
        <div div className="footer">
            <footer>
                <img src={Image}></img>
                <ul>
                    <h4>Doormat Navigation</h4>
                    <li>Home</li>
                    <li>About</li>
                    <li>menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
                <ul>
                    <h4>Contact</h4>
                    <li>Address</li>
                    <li>phone number</li>
                    <li>email</li>
                </ul>
                <ul>
                    <h4>social Media Links</h4>
                    <li>Address</li>
                    <li>phone number</li>
                    <li>email</li>
                </ul>
            </footer>
        </div>
    )
}