import ajaxService from "./ajaxService";
import MovieCard from "../components/moviesCard/MovieCard";

const handleMovieSubmit = () => {
  const form = document.querySelector("#findMovies");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const title = document.querySelector("#movieTitle").value.trim();

    if (!title) {
      alert("Please enter a movie title!");
      return;
    }

    try {
      const movie = await ajaxService(title);

      if (!movie || !movie.Poster) {
        alert("No movie found!");
        return;
      }

      const movieCardContainer = document.querySelector(
        ".movie-cards-container"
      );

      if (!movieCardContainer) {
        console.error("Movie cards container not found");
        return;
      }

      document.querySelector("#movieTitle").value = "";

      movieCardContainer.innerHTML = MovieCard(movie);

      const formElement = document.querySelector(".movie-form");
      formElement.classList.add("top");
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  });
};

export default handleMovieSubmit;
