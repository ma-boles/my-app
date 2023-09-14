import React from "react";
import MenuCard from "./MenuCard";

export default function Specials() {
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
        </>
    )
}