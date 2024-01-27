import React from "react";

export default function feedback({ feedbacks }) {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "black",
        padding: "30px",
        justifyContent: "space-around",
        marginTop: "50px",
      }}
    >
      {feedbacks.map((f) => (
        <div
          style={{
            border: "2px solid red",
            color: "white",
            fontSize: "20px",
            padding: "10px 40px",
          }}
        >
          <span>{f.username}</span>
          <p>{f.comment}</p>
        </div>
      ))}
    </div>
  );
}
