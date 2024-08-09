<script >
export default {
    name: 'The_Header',
 data() {
    return {
        links: [
            {
                text: 'Home',
                url: '#',
            },{
                text: 'About',
                url: '#',
            },{
                text: 'Contact',
                url: '#',
            },{
                text: 'Movies',
                url: '#',
            },{
                text: 'Series',
                url: '#',
            }
        ]
    }
  }
}

</script>

<template>
    <header>
<div class="container-fluid p-3">
  <div class="row d-flex justify-content-center align-items-center">
    <div class="navbar col-12 d-flex justify-content-center align-items-center p-2">
        <div class="col-4 p-2">
            <img src="https://i.imgur.com/6Qq6Z8H.png"
            alt="Logo" style="width:100px">
        </div>
        <div class="col-4 p-2">
            <h1 class="text-center">My Website</h1>
        </div>
        <div class="col-4 p-2">
            <nav class="d-flex justify-content-between">
                <router-link :to="{ name:'home'}" class="decoration">Home</router-link>
                <router-link :to="{ name:'about'}" class="decoration">About</router-link>
                <router-link :to="{ name:'contact'}" class="decoration">Contacts</router-link>
                <router-link :to="{ name:'movies'}" class="decoration">Movies</router-link>
                <router-link :to="{ name:'series'}" class="decoration">Series</router-link>
            </nav>
        </div>
    </div>
  </div>
</div>        

    </header>

</template>

<style scoped>
header{background-color: #222222;
    color: antiquewhite;
    a{
        color: antiquewhite;

    }

    .row{
        background-color: rgba(221, 160, 221, 0.367);
    }
    .decoration{
        text-decoration: none;
    }
}
</style>
