import React from "react";
import Loader from "./Loader";
import { useLocation } from "react-router-dom";

const Saved = ({ saved, loader }) => {
  return (
    <>
      <div className="container-fluid text-center">
        {loader | saved.length === 0 ? (
          <Loader/>
        ) : (
          <>
            <div className="flex">
              {saved.map((image) => (
                <div
                  key={image.id}
                  className="items">
                  <img src={image.src.medium} alt={image.photographer} />
                </div>
              ))}
            </div>
          </>
        )}

        {saved.length != 0 && (
          <div className="m-5">
            <a
              href="#top"
              className="border-4 border-red-600 bg-[#141414] p-3 text-2xl font-bold rounded-full"
            >
              Back To Top...!
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default Saved;
