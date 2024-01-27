import React from "react";


export default function Navbar({ name, address, rating }) {
  return (
    <div
      style={{
        padding: "50px 10px",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "space-around",
        border: "1px solid red",
        fontSize: "25px",
      }}
    >
      <h1 style={{ fontSize: "2.5em" }}>{name}</h1>
      <div className="d-flex align-items-center">
        <p>address:</p>
        <p className="ml-5">{address}</p>
      </div>
      <div className="d-flex align-items-center">
        <p>rating:</p>
        <p>{rating}</p>
      </div>
    </div>
  );
}
