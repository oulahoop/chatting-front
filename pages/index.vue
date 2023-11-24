<template>
    <div class="container">
    <div>
        <NuxtLink to="/login"><v-btn size="x-large" block>Login</v-btn></NuxtLink>
        <NuxtLink to="/register"><v-btn size="x-large" block>Register</v-btn></NuxtLink>
    </div>
    </div>
</template>

<script>

</script>

<style scoped>
    a {
        text-decoration: none;
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .container div {
        width: 450px;
        margin: 10% 0;
    }

    .v-btn {
        margin: 10px 0;
    }
</style>
