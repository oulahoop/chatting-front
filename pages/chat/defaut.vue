<template>
    <div v-if="isLoggedIn" class="">
        <h1>Connected</h1>
    </div>

    <pre>{{store.user}}</pre>
</template>

<script setup>
    import { useUserStore } from '@/stores/UserStore'

    const store = useUserStore()
    console.log(store.user);

</script>

<style></style>