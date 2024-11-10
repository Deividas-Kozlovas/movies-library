import ajaxService from "./ajaxService";
import MovieCard from "../components/moviesCard/MovieCard";

const handleMovieSubmit = () => {
  const form = document.querySelector("#findMovies");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const title = document.querySelector("#movieTitle").value.trim();

    const movieCardContainer = document.querySelector(".movie-cards-container");

    if (!title) {
      movieCardContainer.innerHTML =
        '<p class="error-message">Please enter a movie title!</p>';
      return;
    }

    try {
      const movie = await ajaxService(title);

      if (!movie || !movie.Poster) {
        movieCardContainer.innerHTML =
          '<p class="error-message">No movie found!</p>';
        return;
      }

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
      movieCardContainer.innerHTML =
        '<p class="error-message">An error occurred while fetching the movie!</p>';
    }
  });
};

export default handleMovieSubmit;
