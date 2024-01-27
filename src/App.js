import "./App.css";
import Navbar from "./Navbar";
import Main from "./Main";
import Feedback from "./feedback";

let films = [
  {
    name: "Inception",
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/1000/l27wtjk0/poster/g/j/j/medium-inception-movie-hd-matte-finish-poster-butcutnw9957-original-imagdhvu6euswxb8.jpeg?q=90&crop=false",
    imdb: 100.55,
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    rejissor: "Christoper Nolan ",
    genre: "Action,Adventure",
  },
  {
    name: "The Shawshank Redemption",
    imageUrl:
      "https://originalvintagemovieposters.com/wp-content/uploads/2015/05/Shawshank-Redemption-3205-711x1024.jpg",
    imdb: 121.55,
    description:
      "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
    rejissor: "Frank Darabont",
    genre: "Drama",
  },
  {
    name: "Fast X",
    imageUrl:
      "https://sportshub.cbsistatic.com/i/2023/03/14/50ac619e-265c-4ebe-90f1-696d4105b25e/fast-x-poster.jpg?auto=webp&width=3158&height=5000&crop=0.632:1,smart",
    imdb: 122.55,
    description:
      "Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes.",
    rejissor: "Louis Leterrier",
    genre: "Action,Adventure,Crime",
  },
];

const feedbacks = [
  {
    username: "user1",
    comment: "comment1",
  },
  {
    username: "user2",
    comment: "comment2",
  },
  {
    username: "user3",
    comment: "comment3",
  },
];

function App() {
  return (
    <div className="App">
      <Navbar
        name={"CinemaNAME"}
        address={"CinemaAddress"}
        rating={"1000.99"}
      ></Navbar>
      <Main films={films}></Main>
      <Feedback feedbacks={feedbacks}></Feedback>
    </div>
  );
}

export default App;
