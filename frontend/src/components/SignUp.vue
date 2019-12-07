<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="inputEmail">Email address</label>
                <input aria-describedby="emailHelp" class="form-control inputEmail" id="inputEmail" type="email"
                       v-model="email">
                <small class="form-text text-muted" id="emailHelp">We'll never share your email with anyone
                    else.</small>
            </div>
            <div class="form-group">
                <label for="inputPassword">Password</label>
                <input class="form-control inputPassword" id="inputPassword" type="password" v-model="password">
            </div>
            <div class="form-group form-check">
                <input class="form-check-input" id="exampleCheck1" type="checkbox">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button class="btn btn-primary" type="submit">Submit</button>

            <div class="message" v-if="submitted">
                The Account is created. Please log in for configuration.
            </div>

            <div class="errorMessage" v-if="errorMessage">
                {{ errorMessage }}
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "SignUp",

        data() {
            return {
                email: null,
                password: null,
                submitted: false,
                errorMessage: null
            };
        },
        methods: {
            handleSubmit() {
                this.errorMessage = null;
                if (this.email && this.password) {
                    this.submitted = true;
                } else {
                    if (this.email) {
                        this.errorMessage = "Please enter an password.";
                    } else {
                        this.errorMessage = "Please enter an valid email-address.";
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>