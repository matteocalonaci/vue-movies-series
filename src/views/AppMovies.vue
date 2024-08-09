<script>
import axios from 'axios';
// importo il mio store che contiene numerose istanze usufruibili da chiunque lo importi
import store from '../data/store';
// importo il mio componente
import Single_Movie from './Single_Movie.vue';

import {
  getMovies, getSeries, getImgUrl,
} from '../data/utils';

export default {
  name: "AppMovies",

  components: {
    Single_Movie,
    
  },
  data() {
    return {
      // richiamo lo store
      store,
      currentPage: 1,
      moviePerPage: 10,

    }
  },
  methods: {
    prevPage() {
      //se la pagina corrente è maggiore di 1 
      if (this.currentPage > 1) {
        // andiamo alla pagina precedente
        this.currentPage--;
      } 
      // altrimenti non facciamo nulla

    },
    nextPage() {

      // Il Math.ceil()metodo statico arrotonda sempre per eccesso e restituisce il più piccolo numero intero maggiore o uguale a un numero dato.

      // se la pagina corrente è minore della lunghezza drll'array diviso il numero delle pagine, andiamo alla pagina successiva.
      if (this.currentPage < Math.ceil(this.store.movies.length / this.moviePerPage)) {
        this.currentPage++;
      } else if (this.currentPage < Math.ceil(this.store.movies.length / this.moviePerPage)) {
        this.currentPage++;
      }
    },
  },
  computed: {
    paginatedMovies() {
      const start = (this.currentPage - 1) * this.moviePerPage;
      const end = start + this.moviePerPage;
      return this.store.movies.slice(start, end);
    },
  },
  mounted() {
    axios.get(this.store.moviesUrl)
      .then(response => {
        this.store.movies = response.data.results
        console.log("La chiamata ha restituito MOVIE", response)
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
          <div class=" card-container col-12">
            <Single_Movie v-for="movie in paginatedMovies" :movie="movie" />
          </div>
          <div class="pagination">
            <button class="mx-2" @click="prevPage" :disabled="currentPage === 1">Prev</button>
            <span>Page {{ currentPage }} of {{ store.totalPages }}</span>
            <button class="mx-2" @click="nextPage" :disabled="currentPage === store.totalPages">Next</button>
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
