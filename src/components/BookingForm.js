import React from "react";


export default function BookingForm ({ availableTimes, occasions, dispatch, submitForm }) {


    const [ formData, setFormData ] = React.useState({
        name: "", 
        email: "",
        phone: "",
        time: "",
        date: "",
        guests: "1",
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

    /*let occasions = [ "", "Birthday", "Anniversary"]
    let availableTimes = ["", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"]*/

    const options = availableTimes.map(time => <option key={time}>{time}</option>)
    const occasionsOptions = occasions.map(occasion => <option key={occasion}>{occasion}</option>)

    return(
        <>
        
        <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label><br />
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChangeForm} />
                </div>

                <div>
                    <label htmlFor="email">Email:</label><br />
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChangeForm}></input>
                </div>

                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="(000) 000-0000"required value={formData.phone} onChange={handleChangeForm}></input>
                </div>

                <div>
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" name="date" value={formData.date} min={currentDate} onChange={handleChangeDate}/>
                </div>

                <div>
                    <label htmlFor="time">Time:</label><br />
                    <select id="time" name="time" value={formData.time} onChange={handleChangeForm}>
                        {options} 
                    </select>
                </div>

                <div>
                    <label htmlFor="guests">Guests:</label><br />
                    <input type="number" id="guests" name="guests" placeholder="1" min="1" max="20" value={formData.guests} onChange={handleChangeForm}/>
                </div>

                <div>
                    <label htmlFor="occasion">Occasion:</label><br />
                    <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChangeForm}>
                        {occasionsOptions}
                    </select>
                </div>
     
                <div>
                    <button type="submit" value="Reservation" onClick={handleSubmit} aria-label="reserve">Reserve</button>
                </div>

            </form>
        </>
    )
}

 