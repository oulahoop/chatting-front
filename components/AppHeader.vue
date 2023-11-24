<template>
    <div class="header">
        <h1>Coucou</h1>
        <div>
            <a href=""><v-btn prepend-icon="$vuetify" variant="text">Home</v-btn></a>
            <a href="about"><v-btn prepend-icon="$vuetify" variant="text">About</v-btn></a>
            <a href="contact"><v-btn prepend-icon="$vuetify" variant="text">Contact</v-btn></a>
        </div>
    </div>
</template>

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