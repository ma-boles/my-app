import React from "react";
import "../styles/App.css"


export default function BookingForm ({ /*availableTimes, occasions,*/ dispatch, submitForm }) {

const initialFormData = {
    fname: "", 
    lname: "",
    email: "",
    phone: "",
    time: "",
    date: "",
    guests: "0",
    occasion: ""
};
    const [ formData, setFormData ] = React.useState(initialFormData);

    const [ errors, setErrors ] = React.useState({});
    const [ submitted,setSubmitted ] = React.useState(false);

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

    const handleSubmit = (e) => {
        e.preventDefault();

        if(validateForm()) {
            console.log("Form data submitted:", formData);

            setFormData(initialFormData);
            setErrors({});
            setSubmitted(true);

        } else {
            console.log("Form data contains errors:", errors);
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if(!formData.fname.trim()) {
            newErrors.fname = "First Name is required";
        }
        if(!formData.lname.trim()) {
            newErrors.lname = "Last Name is required";
        }
        if(!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        
        if(!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!validatePhone(formData.phone)) {
            newErrors.phone = "Invalid phone number format";
        }
        
        if(!formData.time.trim()) {
            newErrors.time = "Please select time";
        }
        
        if(!formData.guests.trim()) {
            newErrors.guests = "Parties of 1 or more";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^[0-9-]+$/;
        return phoneRegex.test(phone);
    }

    const currentDate = new Date().toISOString().split("T") [0]

    let occasions = [ "", "Birthday", "Anniversary"]
    let availableTimes = ["", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"]

    const options = availableTimes.map(time => <option key={time}>{time}</option>)
    const occasionsOptions = occasions.map(occasion => <option key={occasion}>{occasion}</option>)

   

    return(
        <>
                
        <form name="form" onSubmit={handleSubmit} id="form">
            
                <div>
                    <label htmlFor="fname">First Name:</label><br />
                    <input type="text" id="fname" name="fname" required value={formData.fname} onChange={handleChangeForm}/>
                    {errors.fname && !submitted && <div className="error">{errors.fname}</div>}
                </div>

                <div>
                    <label htmlFor="lname">Last Name:</label><br />
                    <input type="text" id="lname" name="lname" required value={formData.lname} onChange={handleChangeForm}/>
                    {errors.lname && !submitted && <div className="error">{errors.lname}</div>}
                </div>

                <div>
                    <label htmlFor="email">Email:</label><br />
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChangeForm} ></input>
                    {errors.email && !submitted && <div className="error">{errors.email}</div>}
                </div>

                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="(xxx) xxx-xxxx" required min="10" max="20" value={formData.phone} onChange={handleChangeForm} ></input>
                    {errors.phone && !submitted && <div className="error">{errors.phone}</div>}
                </div>

                <div>
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" name="date" required value={formData.date} min={currentDate} onChange={handleChangeDate} />
                    {errors.date && !submitted && <div className="error">{errors.date}</div>}
                </div>

                <div>
                    <label htmlFor="time">Time:</label><br />
                    <select id="time" name="time" required value={formData.time} onChange={handleChangeForm} >
                        {options} 
                    </select>
                    {errors.time && !submitted && <div className="error">{errors.time}</div>}
                </div>

                <div>
                    <label htmlFor="guests">Guests:</label><br />
                    <input type="number" id="guests" name="guests" required placeholder="1" min="1" max="20" value={formData.guests} onChange={handleChangeForm}/>
                    {errors.guests && !submitted && <div className="error">{errors.guests}</div>}
               </div>

                <div>
                    <label htmlFor="occasion">Occasion:</label><br />
                    <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChangeForm}>
                        {occasionsOptions}
                    </select>
                </div>
     
                <div>
                    <button id="submit" type="submit" value="Reservation" aria-label="reserve">Reserve</button>
                </div>

            </form>
        </>
    )
}

 