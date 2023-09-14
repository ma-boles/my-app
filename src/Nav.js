import React from "react";
import "./App.css";
import { ReactComponent as Logo } from "./images/Logo.svg";
import { Link } from "react-router-dom";

export default function Nav() {
    return(
        <div className="nav">           
        <nav>    
            <ul>
                <li><Logo className="logo"/> </li>
                <li>
                    <Link to="../HomePage">Home</Link>               
                </li>
                <li><Link to="../AboutPage">About</Link></li>
                <li><a>Menu</a></li>
                <li>
                    <Link to="../ReservationsPage">Reservations</Link>
                </li>
                <li><a>Order Online</a></li>
                <li><a>Login</a></li>
            </ul>
        </nav>
        
        </div>
        
    )
}/*
<li><a>Home</a></li>
<li><a>About</a></li>
<li><a>Menu</a></li>
<li><a>Reservations</a></li>
<li><a>Order Online</a></li>
<li><a>Login</a></li>*/