import React from "react";
import "../styles/App.css"
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

const SignupSchema = Yup.object().shape({
    fname: Yup.string()
    .min(3)
    .max(15)
    .required("required"),
    lname: Yup.string()
    .min(3)
    .max(15)
    .required("required"),
    email: Yup.string().email("Invalid email").required("Required")     
})

export default function BookingForm ({ /*availableTimes, occasions,*/ dispatch, submitForm }) {


    const [ formData, setFormData ] = React.useState({
        /*fname: "", 
        lname: "",
        email: "",*/
        phone: "",
        time: "",
        date: "",
        guests: "0",
        occasion: ""
    })

    const handleChangeForm = (event) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const handleChangeDate = async (event) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
        dispatch({ type: "update_times", payload: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        submitForm(formData)

        console.log(formData)
    }

    const currentDate = new Date().toISOString().split("T") [0]

    let occasions = [ "", "Birthday", "Anniversary"]
    let availableTimes = ["", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"]

    const options = availableTimes.map(time => <option key={time}>{time}</option>)
    const occasionsOptions = occasions.map(occasion => <option key={occasion}>{occasion}</option>)

/*
    function checkform() {
        const formElements = document.forms["form"].elements;
        const submitBtn = document.getElementById("submit");

        const submitBtnActive = Array.from(formElements).every(inputElement => inputElement.value.trim() !== "");

        submitBtn.disabled = !submitBtnActive
    }*/

    return(
        <>
        <Formik
                initialValues={{
                    fname: "",
                    lname: "",
                    email: "",
                }}
                validationSchema={SignupSchema}
                onSubmit= {values => {
                    console.log(values);
                }}>
                {({ errors, touched }) => (

                
        <Form name="form" onSubmit={handleSubmit}>
            
                <div>
                    <label htmlFor="name">First Name:</label><br />
                    <Field type="text" id="fname" name="fname" required value={formData.fname} onChange={handleChangeForm}/>
                    {errors.fname && touched.fname ? (
                        <div>{errors.fname}</div>) : null}
                </div>

                <div>
                    <label htmlFor="name">Last Name:</label><br />
                    <input type="text" id="lname" name="lname" required value={formData.lname} onChange={handleChangeForm}/>
                    {errors.lname && touched.lname  ? (<div>{errors.lname }</div>) : null}
                </div>

                <div>
                    <label htmlFor="email">Email:</label><br />
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChangeForm} ></input>
                    {errors.email && touched.email ? <div>{errors.email}</div> : null }
                </div>

                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="(xxx) xxx-xxxx" required min="10" max="20" value={formData.phone} onChange={handleChangeForm} onKeyUp={checkform()}></input>
                </div>

                <div>
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" name="date" required value={formData.date} min={currentDate} onChange={handleChangeDate} onKeyUp={checkform()}/>
                </div>

                <div>
                    <label htmlFor="time">Time:</label><br />
                    <select id="time" name="time" required value={formData.time} onChange={handleChangeForm} onKeyUp={checkform()}>
                        {options} 
                    </select>
                </div>

                <div>
                    <label htmlFor="guests">Guests:</label><br />
                    <input type="number" id="guests" name="guests" required placeholder="1" min="1" max="20" value={formData.guests} onChange={handleChangeForm} onKeyUp={checkform()}/>
                </div>

                <div>
                    <label htmlFor="occasion">Occasion:</label><br />
                    <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChangeForm}>
                        {occasionsOptions}
                    </select>
                </div>
     
                <div>
                    <button id="submit" type="submit" value="Reservation" onClick={handleSubmit} aria-label="reserve" disabled="disabled">Reserve</button>
                </div>

            </Form>
            )}
            </Formik>
        </>
    )
}

 