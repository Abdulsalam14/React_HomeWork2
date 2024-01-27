import React from "react";
import Film from "./Film";

export default function Main({ films }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "50px",
      }}
    >
      {films.map((f ) => (
        <Film props={f}></Film>
      ))}
    </div>
  );
}
