import MovieForm from "../components/moviesForm/MovieForm";

const renderMovieForm = () => {
  const formContainer = document.querySelector(".form-container");

  const formHTML = MovieForm();

  formContainer.innerHTML = formHTML;
};

export default renderMovieForm;
