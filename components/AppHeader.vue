<template>
    <div class="header">
        <h1>Coucou</h1>
        <div>
            <NuxtLink to="/"><v-btn prepend-icon="$vuetify" variant="text">Home</v-btn></NuxtLink>
            <NuxtLink to="/about"><v-btn prepend-icon="$vuetify" variant="text">About</v-btn></NuxtLink>
            <NuxtLink to="/contact"><v-btn prepend-icon="$vuetify" variant="text">Contact</v-btn></NuxtLink>
            <NuxtLink to="/" v-if="isLoggedIn" @click="logout"><v-btn prepend-icon="$vuetify" variant="text">Logout</v-btn></NuxtLink>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
    .header {
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    ul {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>

<script>

const logout = () => {
    useUserStore().logout();
    navigateTo('/');
}
</script>