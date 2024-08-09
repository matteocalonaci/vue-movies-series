<script>
import axios from 'axios';
// importo il mio store che contiene numerose istanze usufruibili da chiunque lo importi
import store from '../data/store';
// importo il mio componente
import Single_Serie from './Single_Serie.vue';

import {
    getMovies, getSeries, getImgUrl,
} from '../data/utils';

export default {
    name: "AppSeries",

    components: {
        Single_Serie
    },
    data() {
        return {
            // richiamo lo store
            store,
            currentPage_series: 1,
            seriePerPage: 10,
        }
    },
    methods: {
        prevPage_series() {
            //se la pagina corrente è maggiore di 1 
            if (this.currentPage_series > 1) {
                // andiamo alla pagina precedente
                this.currentPage_series--;
            }
            // altrimenti non facciamo nulla
        },
        
        nextPage_series() {

            // Il Math.ceil()metodo statico arrotonda sempre per eccesso e restituisce il più piccolo numero intero maggiore o uguale a un numero dato.

            // se la pagina corrente è minore della lunghezza drll'array diviso il numero delle pagine, andiamo alla pagina successiva.
            if (this.currentPage_series < Math.ceil(this.store.series.length / this.seriePerPage)) {
                this.currentPage_series++;
            }
        }
    },
    computed: {
   paginatedSeries() {
            const start = (this.currentPage_series - 1) * this.seriePerPage;
            const end = start + this.seriePerPage;
            return this.store.series.slice(start, end);
        }
    },
    mounted() {
        axios.get(this.store.serieUrl)
            .then(response => {
                this.store.series = response.data.results
                console.log("La chiamata ha restituito SERIE", response)
            }).catch(error => {
                console.error(error)
            })
    }



}

</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class=" series-container col-12">
                    <div class=" card-container col-12">
                        <Single_Serie v-for="serie in paginatedSeries" :serie="serie" />
                    </div>
                    <div class="pagination">
                        <button class="mx-2" @click="prevPage_series"
                            :disabled="currentPage_series === 1">Prev</button>
                        <span>Page {{ currentPage_series }} of {{ store.totalPages }}</span>
                        <button class="mx-2" @click="nextPage_series"
                            :disabled="currentPage_series === store.totalPages">Next</button>
                    </div>
                </div>
            </div>

        </div>
    </main>
</template>

<style scoped>
main {
    background-color: #222222;
    min-height: 100vh;
}

.card-container {
    display: flex;
    /* layout flex per allineare le card */
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    /* permetti alle card di andare a capo */
}

/* .series-container{
  margin-top: 4rem;
} */

.pagination {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
}
</style>
