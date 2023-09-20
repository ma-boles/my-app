import React from "react";
import { useReducer } from "react";
import BookingForm from "../BookingForm";
import fetchAPI from "../api";
import submitAPI from "../api";



export default function BookingPage() {

    const [date, setDate] = React.useState(new Date())

   

    function initializeTimes(date) {
        return fetchAPI(date);
    } 

    function updateTimes(date){
        
        return fetchAPI(date)
    }

    function submitForm(formData) {
        console.log("test")
    }

    function reducer (state, action) {
        let newState;
        switch (action.type) {
            case "update_times":
                const newDate = new Date(action.payload);
                newState = updateTimes(newDate)
                break;
                default: throw new Error()
        }
        return newState
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