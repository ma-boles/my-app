import React from "react";
import { useReducer } from "react";
import BookingForm from "../BookingForm";




export default function BookingPage() {

    let date
    let reducer
    
    function initializeTimes(date) {

    } 

    function updateTimes(date){

    }

    function submitForm(formData) {
        console.log("test")
    }
    const [ availableTimes, dispatch ] = useReducer(reducer, initializeTimes(date))

    return (
        <>
     <div className="reservations">
        <section className="reservations--form">
            
            <h3>Reservations Form</h3>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
        </section>
    </div>
        
        </>
    )

}