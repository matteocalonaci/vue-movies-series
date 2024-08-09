<script>
export default {
name : "The_Footer",
 data() {
    return {
      custumers: [
            {
                text: 'Products',
            },{
                text: 'Services',
            },{
                text: 'Support',
            },{
                text: 'Pricing',
            },
        ],        

        company: [
            {
                text: 'About us',
            },{
                text: 'Careers',
            },{
                text: 'Contact us',
            },{
                text: 'Blog',
            },
        ],

        further_info: [
            {
                text: 'Terms & Condictions',
            },{
                text: 'Privacy Policy',
            },
        ],
    }
  },
  mounted(){
    console.log(this.custumers)
  }

}

</script>

<template>
  <footer>
      <div class="container">
        <div class="row">
          <div class="col-12 d-flex justify-content-center p-4">
            <div class="col-4 text-center">
              <h5>Customers</h5>
              <hr>
              <p v-for="text in custumers">
                <a href="#">{{ text.text }}</a>
              </p>
           
            </div>
            <div class="col-4 text-center">
              <h5>Company</h5>
              <hr>
              <p v-for="text in company">
                <a href="#">{{ text.text }}</a>
              </p>
        
            </div>
            <div class="col-4 text-center">
              <h5>Further Information</h5>
              <hr>
              <p v-for="text in further_info">
                <a href="#">{{ text.text }}</a>
              </p>
           
            </div>
          </div>
        </div>
      </div>
  </footer>



</template>

<style scoped>
footer{
  background-color: black;
}
hr{
  width: 2rem;
margin: auto;
margin-top: 2rem;
color: plum;
}
h5{
  color: plum;
}
p{
  margin-top: 1rem;
}
a {
  list-style: none;
  text-decoration: none;
  color: antiquewhite;
  }
</style>
