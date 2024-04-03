<template>
    <div class="add-server-menu">
        <div class="add-server">
            <h1>Add new server</h1>
            <form @submit.prevent="addServer">
                <input type="text" v-model="serverName" placeholder="Server name" />
                <input type="text" v-model="imageUrl" placeholder="Image URL" />
                <button type="submit">Add server</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
    .add-server-menu {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .add-server {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        border: 1px solid black;
        border-radius: 10px;
    }

    input {
        margin-bottom: 20px;
    }

    button {
        padding: 10px;
        border-radius: 5px;
        background-color: #4CAF50;
        color: white;
        border: none;
    }

    button:hover {
        background-color: #45a049;
    }

</style>

<script setup>
const serverName = ref('');
const imageUrl = ref('');

const addServer = () => {
    caCreateServer(serverName.value, imageUrl.value).then(response => {
        if (response.data != null && response.success === true) {
            useUserStore().addServer(response.data);
            //navigateTo('/chat/' + response.data.server.id);
            navigateTo('/chat/' + response.data.id);
        }
    });
}

</script>