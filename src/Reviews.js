import React from "react";
import TestimonialCard from "./TestimonialCard";

export default function Reviews() {
    return (
        <>
        <section className="testimonials">
                <heading className="testimonials--heading">
                    <h3>Testimonials</h3>
                </heading>
                <aside className="testimonials--card">
                    <TestimonialCard />
                </aside>
            </section>
        </>
    )
}