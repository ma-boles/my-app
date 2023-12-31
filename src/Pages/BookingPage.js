import React from "react";
import { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../api";
import fetchData from "../api"


export default function BookingPage() {

    const [ date, setDate ] = React.useState(new Date());
    const [ formData, setFormData ] = React.useState({});
    const [ isSubmitted, setIsSubmitted ] = React.useState(false); 

    function initializeTimes(date) {
        const currentDate = new Date().toISOString().split("T") [0];
        const availableTimes = fetchData(currentDate);
        console.log("available times for today:", availableTimes)
        return fetchAPI(date);
    } 
    initializeTimes();


    function updateTimes(date){
        const dateObj = new Date(date)
        return fetchAPI(dateObj)
    }

    function submitForm (formData) {
        const isSubmitted = submitAPI(formData);
    }; 

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