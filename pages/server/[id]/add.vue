<template>
    <div class="add-channel">
        <div class="card">
            <h1>Add a channel</h1>
            <form @submit.prevent="addChannel">
                <input type="text" v-model="channelName" placeholder="Channel name" />
                <button type="submit">Add</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
    .add-channel {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
    }

    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #101010;
        padding: 60px;
        border: 1px solid black;
        border-radius: 15px;
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

const channelName = ref('');
const serverId = useRoute().params.id;

const addChannel = () => {
    caCreateChannel(serverId, channelName.value).then(response => {
        console.log('resp', response);
        if (response.data != null && response.success === true) {
            useUserStore().addChannel(response.data);
            navigateTo('/chat/' + serverId + '/' + response.data.id);
        }
    })
}

</script>