<template>
    <div class="join">
        <h1>Join a server</h1>
        <div class="join-form">
            <v-text-field v-model="serverId" label="Server ID"></v-text-field>
            <v-btn @click="joinServer">Join</v-btn>
        </div>
    </div>
</template>

<style scoped>
    .join {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
        width: 100%;
    }

    .join-form {
        width: 40%;
    }

    v-text-field {
        margin-bottom: 20px;
    }

    v-btn {
        padding: 10px;
        border-radius: 5px;
        background-color: #4CAF50;
        color: white;
        border: none;
    }

    v-btn:hover {
        background-color: #45a049;
    }

</style>

<script setup>

import { ref } from 'vue';

const serverId = ref('');

const joinServer = () => {
    caJoinServer(serverId.value).then(response => {
        if (response.data != null && response.success === true) {
            useUserStore().addServer(response.data);
            navigateTo('/chat/' + response.data.id);
        }
    });
}

</script>