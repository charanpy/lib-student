import React from "react";
import TestimonialCardComponent from "../../components/testimonial/TestimonialCard.component";
import "./testimonial.css";
const TestimonialComponent = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="recentHeader dark:text-white">Testimonials</h1>
      </div>
      <div className="flex flex-col  place-items-center   md:flex-row justify-between testimonialCard">
        {new Array(5).fill(2).map((e) => (
          <TestimonialCardComponent />
        ))}
      </div>
    </div>
  );
};

export default TestimonialComponent;
