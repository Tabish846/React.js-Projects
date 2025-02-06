import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ setSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div className="nav mt-4" id="top">
        <div
          onClick={() => {
            setSearch("nature");
            navigate("/");
          }}
          className="button btn btn-outline-warning mx-3 font-bold"
        >
          Nature
        </div>
        <div
          onClick={() => {
            setSearch("fashion");
            navigate("/");
          }}
          className="button btn btn-outline-primary mx-3 font-bold"
        >
          Fashion
        </div>
        <div
          onClick={() => {
            setSearch("technology");
            navigate("/");
          }}
          className="button btn btn-outline-info mx-3 font-bold"
        >
          Technology
        </div>
        <div
          onClick={() => {
            setSearch("cars");
            navigate("/");
          }}
          className="button btn btn-outline-secondary mx-3 font-bold hover:border-red-600"
        >
          Cars
        </div>
        <div
          onClick={() => {
            setSearch("travel");
            navigate("/");
          }}
          className="button btn btn-outline-warning mx-3 font-bold"
        >
          Travel
        </div>
        <div
          onClick={() => {
            setSearch("animals");
            navigate("/");
          }}
          className="button btn btn-outline-light mx-3 font-bold"
        >
          Animals
        </div>
        <div
          onClick={() => {
            setSearch("city");
            navigate("/");
          }}
          className="button btn btn-outline-dark text-light mx-3 font-bold border-red-600"
        >
          City
        </div>
        <div
          onClick={() => {
            setSearch("dubai");
            navigate("/");
          }}
          className="button btn btn-outline-primary mx-3 font-bold"
        >
          Dubai
        </div>
        <div
          onClick={() => {
            setSearch("business & finance");
            navigate("/");
          }}
          className="button btn btn-outline-warning mx-3 font-bold"
        >
          Business & Finance
        </div>
        <div
          onClick={() => {
            setSearch("tokyo");
            navigate("/");
          }}
          className="button btn btn-outline-info mx-3 font-bold"
        >
          Tokyo
        </div>

        {location.pathname == "/saved" ? (
          <div
            className="button btn btn-primary mx-3 font-bold"
            onClick={() => {
              navigate("/");
            }}
          >
            Go-to-Home
          </div>
        ) : (
          <div
            className="button btn btn-primary mx-3 font-bold"
            onClick={() => {
              navigate("/saved");
            }}
          >
            Saved-Images
          </div>
        )}
      </div>

      <div
        className="container my-4"
        style={{
          width: "780px",
        }}
      >
        {location.pathname === "/" && (
          <div className="mb-3">
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              type="search"
              className="form-control bg-dark text-light font-bold"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
