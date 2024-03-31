<template>
    <h1 v-if="channel != undefined && useUserStore().user != null">{{ channel.name }}</h1>

    <div v-if="channel != undefined && useUserStore().user != null" class="chat">
        <div class="messages">
            <div class="message" v-for="message in channelMessages" :class="message.creator.id === useUserStore().user.id ? 'current-user-message' : ''" :key="message.id">
                <h3>{{ message.creator.name }}</h3>
                <p>{{ message.content }}</p>
            </div>
        </div>

        <form @submit.prevent="sendMessage" class="form">
            <input type="text" v-model="message" placeholder="Message" />
            <button type="submit">Send</button>
        </form>
    </div>
</template>

<style scoped>
    .chat {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        height: 85vh;
    }
    
    .messages {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        overflow: scroll;
    }

    .message {
        padding: 10px;
        border: 1px solid black;
        background-color: #303030;
        border-radius: 5px;
        margin-bottom: 10px;
        width: 90%;
        margin-right: 50px;
    }

    .form {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .current-user-message {
        background-color: #4CAF50;
        color: white;
        margin-left: 50px;
        margin-right: 0px;
    }

    input {
        width: 70%;
        padding: 20px;
        background-color: #202020;
        border-radius: 10px;
    }

    button {
        padding: 20px;
        border-radius: 10px;
        background-color: #4CAF50;
        color: white;
        border: none;
    }

    button:hover {
        background-color: #45a049;
    }

    h1 {
        margin-bottom: 20px;
        text-align: center;
    }
    
</style>

<script setup>
import { useRoute } from 'vue-router';

definePageMeta({
    layout: 'connected'
});

const route = useRoute();
const channel = ref(null);
const message = ref('');
const channelMessages = ref([]);

const refreshData = () => {
    let channelId = +route.params.channel_id;
    let serverId = +route.params.server_id;

    if (useUserStore().user === null) {
        return;
    }

    channel.value = useUserStore().user.servers.find(server => server.id === serverId).channels.find(channel => channel.id === channelId);
}

refreshData();

const sendMessage = () => {
    if (message.value === '') {
        return;
    }

    caCreateMessage(channel.value.id, message.value).then(response => {
        if (response.data != null && response.success === true) {
            getChannelMessages();
            message.value = '';
        }
    });
}

function updateScroll(){
    var element = document.querySelector(".messages");
    element.scrollTop = element.scrollHeight;
}

const getChannelMessages = () => {
    let channelId = +route.params.channel_id;

    caGetChannelMessages(channelId).then(response => {
        if (response.data != null && response.success === true) {
            channelMessages.value = response.data;
            setTimeout(() => {
                updateScroll();
            }, 10);
        }
    });
}

setInterval(() => {
    getChannelMessages();
}, 5000);

getChannelMessages();

</script>