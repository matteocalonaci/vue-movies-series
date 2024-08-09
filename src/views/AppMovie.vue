<script>
import axios from 'axios';
import store from '../data/store';
export default {
    name: "AppMovie",
    data() {
        return {
            store,
            moviesUrl: "https://api.themoviedb.org/3/movie/",
            movies: [],
            base_url: 'http://localhost:5173',
            apiKey: "8b88073be6169a14cbf29114b8bd3270"
        }
    },
    methods: {
        getImgUrl(path) {
            return this.store.urlImage + path;
        },
        getStars(voteAverage) {
            let stars = '';
            for (let i = 0; i < Math.floor(voteAverage); i++) {
                stars += '★';
            }
            return stars;
        }
    },
    mounted() {
        const movieId = this.$route.params.id;
        axios
            .get(`${this.moviesUrl}${movieId}?api_key=${this.apiKey}`)
            .then(response => {
                this.movies = response.data;
                console.log("La chiamata ha restituito MOVIE", response)
            }).catch(error => {
                console.error(error)
            })
    }
}





</script>

<template>
    <div class="card-container">

        <div class="card">
            <div class="col-12">
                <div class="card-header">
                    <h2>{{ movies.title }}</h2>
                </div>
                <div class="col-12 d-flex">
                    <div class="col-4">
                        <div class="card-img">
                            <img :src="getImgUrl(movies.poster_path)" alt="Card image">
                        </div>
                    </div>
                    <div class="col-8">
                        <div class="card-body">
                            <div class="card-text p-3">
                                <p class="p-2"><b>Description:</b> {{ movies.overview }}</p>
                                <p class="p-2"><b>Original title:</b> {{ movies.original_title }}</p>
                                <p class="p-2" v-if="movies.adult == true"> <b>Movie for over 18:</b> Yes</p>
                                <p class="p-2" v-else> <b>Movie for over 18:</b> No</p>
                                <p class="p-2">
                                    <b>Vote:</b>
                                    {{ getStars(movies.vote_average) }}
                                </p>
                                <p class="p-2"><b>Release date:</b> {{ movies.release_date }}</p>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>


    </div>







</template>

<style scoped>
.card-container {
    background-color: #222222;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    width: 60rem;
    margin: 0.5rem;
    /* height: 25rem; */
    background-color: rgba(221, 160, 221, 0.111);
    color: antiquewhite;
}

.card-img {
    display: flex;
    justify-content: center;
    width: 100%;

    img {
        width: 100%;
    }
}

button {
    color: blueviolet;
}

.btn-info {
    background-color: plum;
    color: antiquewhite;
    border: none;
    border-radius: 10rem;
}
</style>
