const MovieCard = (movie) => {
  return `
    <section class="movie-card">
      <div class="movie-card__image">
        <img src="${movie.Poster}" alt="${movie.Title}" />
      </div>
      <div class="movie-card__details">
        <h2 class="movie-card__title">${movie.Title} (${movie.Year})</h2>
        <p class="movie-card__rating">IMDb Rating: ${movie.imdbRating}</p>
        <p class="movie-card__genre">${movie.Genre}</p>
        <p class="movie-card__runtime">Runtime: ${movie.Runtime}</p>
        <p class="movie-card__release">Released: ${movie.Released}</p>
        
        <div class="movie-card__summary">
          <h3>Plot</h3>
          <p>${movie.Plot}</p>
        </div>
        
        <div class="movie-card__cast">
          <h3>Cast</h3>
          <p>${movie.Actors}</p>
        </div>
        
        <div class="movie-card__crew">
          <p><strong>Director:</strong> ${movie.Director}</p>
          <p><strong>Writer:</strong> ${movie.Writer}</p>
        </div>
        
        <div class="movie-card__ratings">
          <h3>Ratings</h3>
          <ul>
            ${movie.Ratings.map(
              (rating) => `<li>${rating.Source}: ${rating.Value}</li>`
            ).join("")}
          </ul>
        </div>
        
        <div class="movie-card__awards">
          <p><strong>Awards:</strong> ${movie.Awards}</p>
        </div>
        
        <div class="movie-card__box-office">
          <p><strong>Box Office:</strong> ${movie.BoxOffice}</p>
        </div>
      </div>
    </section>
  `;
};

export default MovieCard;
