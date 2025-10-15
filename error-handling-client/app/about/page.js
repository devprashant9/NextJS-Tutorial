"use client"

import { useState } from "react";

const About = () => {
  const [fruits, setFruits] = useState(["apple", "mango"]);
  return (
    <div>
      <h1>About Us</h1>
      <p>We are a company dedicated to providing quality services.</p>
      <button onClick={() => {
        // console.log(object);
        setFruits(null);
      }}>Click</button>

      {
        fruits.map((item) => (<p key={item}>{item}</p>))
      }
    </div>
  );
};

export default About;
