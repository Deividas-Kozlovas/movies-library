import ajaxService from "./ajaxService";
import MovieForm from "../components/MovieForm";
import MovieCard from "../components/moviesCard/MovieCard";

const renderMovie = () => {
  document.querySelector(".container").innerHTML = MovieForm();

  document
    .querySelector("#findMovies")
    .addEventListener("submit", async (event) => {
      event.preventDefault();

      const title = document.querySelector("#movieTitle").value;

      const movie = await ajaxService(title);

      document.querySelector(".container").innerHTML += MovieCard(movie);
    });
};

export default renderMovie;
