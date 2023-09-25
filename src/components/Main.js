import React from "react";
import { useReducer } from "react";
import MenuCard from "./MenuCard";
import TestimonialCard from "./TestimonialCard";
import Chefs from "../images/Mario and Adrian b.jpg";
import { fetchAPI, submitAPI } from "../api";
/*import { formData } from "../Pages/BookingPage"*/


/*
const reducer = (state, action) => {
    switch(action.type) {
        case "open" :
            return { ...state, date: state.date + 1};
        case "reserved":
            return { ...state, date: state.date -1};
        default:
            throw new Error();
    }
} */

function reducer (state, action) {
    const { type, payload } = action;

    switch(action.type) {
        case "open" :
            return { ...state, date: state.date + 1};
        case "reserved":
            return { ...state, date: state.date -1};
        default:
            throw new Error();

        /*return state;*/
    return {...state, [type]: payload };
}
}

 /*function reducer (initializeTimes, updateTimes) {
        if (updateTimes.type === "reserve") return {date: initializeTimes.date - 1};
        if(updateTimes.type === "cancel") return {date: initializeTimes.date + 1};
        return initializeTimes
    }*/
export default function Main(  ) {
let date

/*let availableTimes = ["", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"]
    const [ state, dispatch ] = useReducer(reducer,  initializeTimes(date))*/
const occasions = [ "", "Birthday", "Anniversary"]

/*
    const [ availableTimes, setAvailableTimes ] = React.useState('')
   */


    function updateTimes (date) {
        return fetchAPI(date)
        
    }

    function initializeTimes (date) {
        const currentDate = new Date().toISOString().split("T") [0]
        console.log(initializeTimes)
    }

    function submitForm(data) {
        const apiResponse = submitAPI(/*formData*/);
        
        
        return submitAPI(/*formData*/)
    }

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
