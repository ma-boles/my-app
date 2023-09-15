import React from "react";



export default function Reservations() {
    return (
        <>
     <div className="reservations">
        <section className="reservations--form">
            
            <h3>Reservations Form</h3>
            <form>
                <div>
                    <label for="name">Name:</label><br />
                    <input type="text" id="name" name="name"></input>
                </div>
                <div>
                    <label for="time">Time:</label><br />
                    <select>
                        <option>18:00</option>
                        <option>18:30</option>
                        <option>19:00</option>
                        <option>19:30</option>
                        <option>20:00</option>
                        <option>20:30</option>
                        <option>21:00</option>
                        <option>21:30</option>
                        <option>22:00</option>
                        <option>22:30</option>
                    </select>
                </div>
                <div>
                    <label for="guests">Number of Guests:</label><br />
                    <input type="number" id="guests" name="guests" placeholder="1" min="1" max="20"></input>
                </div>
                <div>
                    <label for="occasion">Occasion:</label><br />
                    <select>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Banquet</option>
                    </select>

                </div>
                <div>
                    <button type="submit" value="Reservation">Reservation</button>
                </div>

            </form>
        </section>
    </div>
        
        </>
    )
}