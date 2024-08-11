<script>
export default {
    name: 'AppContact',
    data() {
        return {

        }
    }
}

</script>

<template>
    <div class="card-container">
        <div class="card mt-5">
        <div class="col-12 p-4">
            <h2>Contact me</h2>
            <p>It’s important to note that the contact page is not the only place where you
                should include contact information. You should also include a contact page on your website’s footer, as
                well as on your About page. This way, visitors can easily find your contact information no matter
                where they are on your site.
            </p>
            <template v-if="success">
                <div class="alert alert-success" role="alert">
                    <b>Messaggio inviato</b>
                </div>
            </template>

        </div>

        <div class="col-12 p-4">
            <form >
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" name="name" id="name" aria-describedby="helpId"
                        placeholder="" v-model="name">
                    <small id="nameHelper" class="form-text text-white">Write your name</small>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="text" class="form-control"name="email" id="email" aria-describedby="emailHelp"
                        placeholder="" v-model="email">


                    <small id="emailHelper" class="form-text text-white">Write your email</small>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea type="text" class="form-control"name="message" id="message" rows="3" placeholder=""
                        v-model="message">
                    </textarea>

                    <small id="messageHelper" class="form-text text-white">Write your email text</small>
                </div>
                <button type="submit" class="btn btn-primary">
                    SEND
                </button>
            </form>
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


</style>
