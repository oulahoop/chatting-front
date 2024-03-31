<template>
    <div class="container">
        <v-card>
            <h3>Register</h3>
            <v-text-field v-model="usernameInput" label="Name" variant="outlined"></v-text-field>
            <v-text-field v-model="emailInput" label="Email" variant="outlined" type="email"></v-text-field>
            <v-text-field v-model="passwordInput" label="Password" variant="outlined" type="password"></v-text-field> 

            <v-card-actions>
                <ClientOnly><v-btn @click="registerUser()">Register</v-btn></ClientOnly>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script setup>
const emailInput = ref('');
const usernameInput = ref('');
const passwordInput = ref('');

const registerUser = () => {
    caRegister(emailInput.value, passwordInput.value, usernameInput.value).then(response => {
        if (response.data != null && response.data.token != null) {
            localStorage.setItem('token', response.data.token);
            navigateTo('/');
        }
    })
}

</script>

<style scoped>
    a {
        text-decoration: none;
    }

    h3 {
        margin-bottom: 40px;
        text-align: center;
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .v-card {
        padding: 30px 20px;
        width: 400px;
        margin-top: 8%;
    }

</style>