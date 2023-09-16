import React from "react";




export default function Reservations() {
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log(name)
        console.log(occasion)
        console.log(guests)
        console.log(time)
        console.log(date)
    }

    let availableTimes = ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"]
    const currentDate = new Date().toISOString().split("T") [0]
    const options = availableTimes.map(time => <option key={time}>{time}</option>)

    const [ name, setName ] = React.useState('');
    const [ time, setTime ] = React.useState('');
    const [ date, setDate ] = React.useState(currentDate);
    const [ guests, setGuests ] = React.useState(''); 
    const [ occasion, setOccasion ] = React.useState('Birthday')
 


    return (
        <>
     <div className="reservations">
        <section className="reservations--form">
            
            <h3>Reservations Form</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label><br />
                    <input type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                        <label htmlFor="date">Date:</label>
                        <input id="date" value={date}/>
                    </div>
                <div>
                    
                    <label htmlFor="time">Time:</label><br />
                    <select id="time" value={time} onChange={(e) => setTime(e.target.value)}>
                        {options}
                    </select>
                </div>
                <div>
                    <label htmlFor="guests">Guests:</label><br />
                    <input type="number" id="guests" name="guests" placeholder="1" min="1" max="20" value={guests} onChange={(e) => setGuests(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="occasion">Occasion:</label><br />
                    <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                        <option value={"Birthday"}>Birthday</option>
                        <option value={"Anniversary"}>Anniversary</option>
                        <option value={"Banquet"}>Banquet</option>
                    </select>

                </div>
                <div>
                    <button type="submit" value="Reservation">Reserve</button>
                </div>

            </form>
        </section>
    </div>
        
        </>
    )

}