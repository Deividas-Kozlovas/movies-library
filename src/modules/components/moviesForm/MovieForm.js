const MovieForm = () => {
  return `
      <form id="findMovies" class="movie-form">
        <label for="movieTitle">Movie Title:</label>
        <input type="text" id="movieTitle" name="movieTitle" placeholder="Enter movie title" required />
        <button type="submit">Find Movies</button>
      </form>
    `;
};

export default MovieForm;
