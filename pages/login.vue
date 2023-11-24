<template>
    <div class="container">
        <v-card>
            <h3>Sign In</h3>

            <v-text-field v-model="loginInput" label="Login" variant="outlined" type="email"></v-text-field>
            <v-text-field v-model="passwordInput" label="Password" variant="outlined" type="password"></v-text-field> 

            <v-card-actions>
                <ClientOnly><v-btn @click="tryLogin()">Login</v-btn></ClientOnly>
                <v-btn>Register</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/UserStore'

const loginInput = ref('');
const passwordInput = ref('');
const userStore = useUserStore();


async function tryLogin() {
    caLogin(loginInput.value, passwordInput.value).then(response => {
        if (response.data != null && response.data.token != null) {
            localStorage.setItem('token', response.data.token);
            userStore.setUser(response.data.user);
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
