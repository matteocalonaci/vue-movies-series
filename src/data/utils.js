// utils.js
export function  getMovies() {
    for (let i = 0; i < 10; i++) {
      axios.get(this.store.moviesUrl)
        .then(response => {
          this.store.movies = response.data.results
        }).catch(error => {
          console.error(error)
        })
    }
    return this.store.movies
  }
  
  export function getSeries() {
    for (let i = 0; i < 10; i++) {
      axios.get(this.store.serieUrl)
        .then(response => {
          this.store.series = response.data.results
        }).catch(error => {
          console.error(error)
        })
    }
    return this.store.series
  }

  export function getImgUrl(path) {
    return this.store.urlImage + path;
  }
