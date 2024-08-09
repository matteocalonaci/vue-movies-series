import { reactive } from "vue";

const store = reactive({

    moviesUrl: "https://api.themoviedb.org/3/movie/popular?api_key=8b88073be6169a14cbf29114b8bd3270",
    movies: [],
    serieUrl: "https://api.themoviedb.org/3/tv/popular?api_key=8b88073be6169a14cbf29114b8bd3270",
    series: [],
    urlImage: "https://image.tmdb.org/t/p/w1280",
    currentPage: 1,
    currentPage_series: 1,
    moviePerPage: 5,
    seriePerPage: 5,



});
export default store;