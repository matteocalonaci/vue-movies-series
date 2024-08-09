<script>
import axios from 'axios';
import store from '../data/store';
export default {
    name: "AppSerie",
    data() {
        return {
            store,
            serieUrl: "https://api.themoviedb.org/3/tv/",
            series: [],
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
        const serieId = this.$route.params.id;
        axios
            .get(`${this.serieUrl}${serieId}?api_key=${this.apiKey}`)
            .then(response => {
                this.series = response.data;
                console.log("La chiamata ha restituito SERIE", response)
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
                    <h2>{{ series.name }}</h2>
                </div>
                <div class="col-12 d-flex">
                    <div class="col-4">
                        <div class="card-img">
                            <img :src="getImgUrl(series.poster_path)" alt="Card image">
                        </div>
                    </div>
                    <div class="col-8">
                        <div class="card-body">
                            <div class="card-text p-3">
                                <p class="p-2"><b>Description:</b> {{ series.overview }}</p>
                                <p class="p-2"><b>Original name:</b> {{ series.original_name }}</p>
                                <p class="p-2" v-if="series.in_production"> <b>Serie status:</b> In production</p>
                                <p class="p-2" v-else> <b>Serie status:</b> Not in production</p>
                                <p class="p-2">
                                    <b>Vote:</b>
                                    {{ getStars(series.vote_average) }}
                                </p>
                                <p class="p-2"><b>Created by:</b>
                                    <span class="px-1" v-for="name in series.created_by">
                                        {{ name.name }}
                                    </span>
                                </p>
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
    background-color: rgba(221, 160, 221, 0.229);
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
