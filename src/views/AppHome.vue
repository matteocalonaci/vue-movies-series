<script>
import axios from 'axios';
// importo il mio store che contiene numerose istanze usufruibili da chiunque lo importi
import store from '../data/store';
// importo il mio componente
import Single_Movie from './Single_Movie.vue';
import Single_Serie from './Single_Serie.vue';

import {
  getMovies, getSeries, getImgUrl,
} from '../data/utils';

export default {
  name: "AppHome",

  components: {
    Single_Movie,
    Single_Serie
  },
  data() {
    return {
      // richiamo lo store
      store
    }
  },
  methods: {
    prevPage() {
      //se la pagina corrente è maggiore di 1 
      if (this.store.currentPage > 1) {
        // andiamo alla pagina precedente
        this.store.currentPage--;
      } else if (this.store.currentPage_series > 1) {
        // andiamo alla pagina precedente
        this.store.currentPage_series--;
      }
      // altrimenti non facciamo nulla
    },

    prevPage_series() {
      //se la pagina corrente è maggiore di 1 
      if (this.store.currentPage_series > 1) {
        // andiamo alla pagina precedente
        this.store.currentPage_series--;
      }
      // altrimenti non facciamo nulla
    },
    nextPage() {

      // Il Math.ceil()metodo statico arrotonda sempre per eccesso e restituisce il più piccolo numero intero maggiore o uguale a un numero dato.

      // se la pagina corrente è minore della lunghezza drll'array diviso il numero delle pagine, andiamo alla pagina successiva.
      if (this.store.currentPage < Math.ceil(this.store.movies.length / this.store.moviePerPage)) {
        this.store.currentPage++;
      } else if (this.store.currentPage_series < Math.ceil(this.store.series.length / this.store.seriePerPage)) {
        this.store.currentPage_series++;
      }
    },

    nextPage_series() {

      // Il Math.ceil()metodo statico arrotonda sempre per eccesso e restituisce il più piccolo numero intero maggiore o uguale a un numero dato.

      // se la pagina corrente è minore della lunghezza drll'array diviso il numero delle pagine, andiamo alla pagina successiva.
      if (this.store.currentPage_series < Math.ceil(this.store.series.length / this.store.seriePerPage)) {
        this.store.currentPage_series++;
      }
    }
  },
  computed: {
    paginatedMovies() {
      const start = (this.store.currentPage - 1) * this.store.moviePerPage;
      const end = start + this.store.moviePerPage;
      return this.store.movies.slice(start, end);
    },

    paginatedSeries() {
      const start = (this.store.currentPage_series - 1) * this.store.seriePerPage;
      const end = start + this.store.seriePerPage;
      return this.store.series.slice(start, end);
    }
  },
  mounted() {
    axios.get(this.store.moviesUrl)
      .then(response => {
        this.store.movies = response.data.results
        console.log("La chiamata ha restituito MOVIE", response)
      }).catch(error => {
        console.error(error)
      })

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
        <div class="movies-container col-12">
          <h2 class="title">Movies</h2>
          <div class=" card-container col-12">
            <Single_Movie v-for="movie in paginatedMovies" :movie="movie" />
          </div>
          <div class="pagination">
            <button class="mx-2" @click="prevPage" :disabled="store.currentPage === 1">Prev</button>
            <span>Page {{ store.currentPage }} of {{ store.totalPages }}</span>
            <button class="mx-2" @click="nextPage" :disabled="store.currentPage === store.totalPages">Next</button>
          </div>
        </div>

        <div class=" series-container col-12">
          <h2 class="title">Series</h2>
          <div class=" card-container col-12">
            <Single_Serie v-for="serie in paginatedSeries" :serie="serie" />
          </div>
          <div class="pagination">
            <button class="mx-2" @click="prevPage_series" :disabled="store.currentPage_series === 1">Prev</button>
            <span>Page {{ store.currentPage_series }} of {{ store.totalPages }}</span>
            <button class="mx-2" @click="nextPage_series"
              :disabled="store.currentPage_series === store.totalPages">Next</button>
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
h2{
  color: plum;
  text-align: center;
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
