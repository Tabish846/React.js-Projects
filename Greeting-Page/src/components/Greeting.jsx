import React, { useState } from "react";

const Greeting = () => {
  let date = new Date();
  let currentTime = date.toLocaleTimeString();

  const [time, setTime] = useState(currentTime);

  setInterval(() => {
    let date = new Date();
    let currentTime = date.toLocaleTimeString();
    setTime(currentTime);
  }, 1000);

  let hour = date.getHours();
  let msg;

  if (hour >= 5 && hour < 12) {
    msg = "GOOD MORNING 🥱 ";
  }
  if (hour >= 12 && hour < 18) {
    msg = "GOOD AFTERNOON 🌞 ";
  }
  if (hour >= 18 && hour < 22) {
    msg = "GOOD EVENING 🌅 ";
  }
  if (hour > 22) {
    msg = "GOOD NIGHT 🌛 ";
  }
  if (hour < 5) {
    msg = "GOOD NIGHT 🌛 ";
  }

  return (
    <>
      <div className="container">
        <h2>Greeting-Page</h2>
        <h1> {time} </h1>
        <h3>{msg}</h3>
      </div>
    </>
  );
};

export default Greeting;
