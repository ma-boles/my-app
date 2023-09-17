import React from "react";


export default function BookingForm ({ /*availableTimes,*/ dispatch, submitForm }) {

    const [ formData, setFormData ] = React.useState({
        name: "", 
        email: "",
        phone: "",
        time: "",
        date: "",
        guests: "",
        occasion: "Birthday"
    })

    const handleFormChange = (event) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        submitForm(formData)
        /*

        console.log(formData.name)
        console.log(formData.occasion)
        console.log(formData.guests)
        console.log(formData.time)
        console.log(formData.date)
        console.log(formData.email)
        console.log(formData.phone)*/
    }

    let availableTimes = ["", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"]  
    const currentDate = new Date().toISOString().split("T") [0]
    const options = availableTimes.map(time => <option key={time}>{time}</option>)

    return(
        <>
        <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label><br />
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleFormChange} />
                </div>

                <div>
                    <label htmlFor="email">Email:</label><br />
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleFormChange}></input>
                </div>

                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="text"  id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required value={formData.phone} onChange={handleFormChange}></input>
                </div>

                <div>
                        <label htmlFor="date">Date:</label>
                        <input id="date" value={formData.date} onChange={(e) => setFormData.date(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="time">Time:</label><br />
                    <select id="time" value={formData.time} onChange={handleFormChange}>
                        {options}
                    </select>
                </div>

                <div>
                    <label htmlFor="guests">Guests:</label><br />
                    <input type="number" id="guests" name="guests" placeholder="1" min="1" max="20" value={formData.guests} onChange={handleFormChange}/>
                </div>

                <div>
                    <label htmlFor="occasion">Occasion:</label><br />
                    <select id="occasion" value={formData.occasion} onChange={handleFormChange}>
                        <option value={"Birthday"}>Birthday</option>
                        <option value={"Anniversary"}>Anniversary</option>
                        <option value={"Banquet"}>Banquet</option>
                    </select>
                </div>

                <div>
                    <button type="submit" value="Reservation" onClick={handleSubmit}>Reserve</button>
                </div>

            </form>
        </>
    )
}

