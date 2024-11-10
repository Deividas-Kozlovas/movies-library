import ajaxService from "./ajaxService";

const renderMovie = async () => {
  const movie = await ajaxService("spider-man");
  const main = document.querySelector("main");
  console.log(movie.Actors);
};

export default renderMovie;
