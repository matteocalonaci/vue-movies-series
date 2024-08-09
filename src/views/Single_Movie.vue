<script>
import store from '../data/store';
export default {
  name: "Single_Movie",
  props: [ "movie" ],
  data() {
    return {
store


    }
  },
  methods: {
    getImgUrl(path) {
      return this.store.urlImage + path;
    },
   
  },
  computed: {

  },
  mounted() {


  }



}

</script>

<template>

        <div class="card" >
          <div class="card-header">
            <h6 v-html="movie.title.slice(0,10) + '...'"></h6>
          </div>
          <div class="card-body">
            <div class="card-img">
              <img :src="getImgUrl(movie.poster_path)">
            </div>
            <div class="card-text d-flex justify-content-center align-items-center p-3">
              <RouterLink :to="{ name: 'movie' , params: { id: movie.id }}" class="btn-info"> More Info</RouterLink>
            <!-- <p class="p-2" v-html="movie.overview.slice(0, 150) + '...'"></p> -->
             </div>
          </div>
        </div>


</template>

<style scoped>
.card{
  width: calc( 100%  / 6);
  margin: 0.5rem;
  height: 25rem;
  background-color: rgba(221, 160, 221, 0.111);
  color: antiquewhite;
  margin-top: 5rem;
}
.card-img{
    display: flex;
    justify-content: center;
  width: 100%;
  img{
    width: 100%;
  }
}

button{
  color: blueviolet;
}

.btn-info{
background-color: plum;
color:antiquewhite;
border: none;
border-radius: 10rem;
padding: 0.5rem 1rem;
text-decoration: none;
}
</style>
