import Imdb from "./imdb";

const style = {
  textAlign: "left",
  marginLeft: "15px",
};

export default function Film({ props }) {
  return (
    <div
      style={{
        width: "20%",
        border: "2px solid red",
        fontSize: "25px",
      }}
    >
      <div>
        <img
          style={{ width: "100%", height: "600px" }}
          src={props.imageUrl}
          alt={props.name}
        />
      </div>
      <div>
        <h2 className="mb-3 mt-3">{props.name}</h2>
      </div>
      <div style={style}>
        <span>Description:</span>
        <span className="m-2">{props.description}</span>
      </div>
      <div style={{ style }}></div>
      <div style={style}>
        <span>Rejissor:</span>
        <span className="m-2">{props.rejissor}</span>
      </div>
      <div style={style}>
        <span>Genre:</span>
        <span className="m-2">{props.genre}</span>
      </div>
      <Imdb imdb={props.imdb}></Imdb>
    </div>
  );
}
