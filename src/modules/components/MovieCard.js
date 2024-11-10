const MovieCard = (movie) => {
  return `
      <main class="movies">
          <div class="movie">
            <div class="movie__image">
              <img src="${movie.image}" alt="${movie.title}" />
            </div>
            <div class="movie__info">
              <ul>
                <li>Title: ${movie.title}</li>
                <li>Year: ${movie.year}</li>
                <li>Genre: ${movie.genre}</li>
                <li>Rating: ${movie.rating}</li>
              </ul>
            </div>
          </div>
      </main>
    `;
};

export default MovieCard;
