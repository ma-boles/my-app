import React from "react";
import { ReactComponent as Logo } from "./images/Logo.svg";

export default function Nav() {
    return(
        <>
        <Logo />        
        <nav>
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><a>Reservations</a></li>
                <li><a>Order Online</a></li>
                <li><a>Login</a></li>
            </ul>
        </nav>
        </>
    )
}