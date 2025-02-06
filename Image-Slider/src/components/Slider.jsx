import React, { useEffect, useRef, useState } from "react";
import data from "./data.json";

const Slider = () => {
  const [next, setNext] = useState(1);
  let ref = useRef(null);

  const handleNext = () => {
    setNext((previousValue) => {
      if (previousValue === data.length - 1) {
        return 1;
      }
      return previousValue + 1;
    });

    // if (next === data.length - 1) {
    //   setNext(0);
    // } else {
    //   setNext(next + 1);
    // }
  };

  const handlePrev = () => {
    if (next === 0) {
      setNext(data.length - 1);
    } else {
      setNext(next - 1);
    }
  };

  useEffect(() => {
    ref.current = setInterval(handleNext, 2000);
    return (() => {
      clearInterval(ref.current);
    });
  }, []);

  return (
    <div
      onMouseEnter={() => {
        clearInterval(ref.current);
      }}
      onMouseLeave={() => {
        ref.current = setInterval(handleNext, 2000);
      }}
      className="container"
    >
      <div className="left-btn">
        <button
          onClick={() => {
            handlePrev();
          }}
        >
          {"<"}
        </button>
      </div>
      <img src={data[next].download_url} alt="image" />
      <div className="right-btn">
        <button
          onClick={() => {
            handleNext();
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Slider;
