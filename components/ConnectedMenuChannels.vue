<template>
    <div class="channels" v-if="serverSelected !== null && serverSelected !== undefined">
            <div class="channel" v-for="channel in serverSelected.channels" :key="channel.id" :class="channel.id === +useRoute().params?.channel_id ? 'channel-selected' : ''">
                <NuxtLink :to="'/chat/' + serverSelected.id + '/' + channel.id"><h3>#{{ channel.name }}</h3></NuxtLink>
            </div>

            <div class="add-channel channel">
                <NuxtLink :to="'/server/' + serverSelected.id + '/add'"><h3>Add new channel</h3></NuxtLink>
            </div>
        </div>
</template>

<style>
    .channels {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .channel {
        padding: 10px;
        background-color: #101010;
        border-radius: 5px;
        margin-bottom: 10px;
        width: 200px;
    }

    .channel-selected { 
        background-color: #1f1f1f;
    }

    .add-channel {
        padding: 10px;
        border-radius: 5px;
        margin-bottom: 10px;
    }

    a {
        text-decoration: none;
    }

    h3 {
        margin: 0;
        text-decoration: none;
        color: white
    }
</style>

<script setup lang="ts">
import { Server } from '@/models/Server';

const props = defineProps({
    serverSelected: Server
});

</script>