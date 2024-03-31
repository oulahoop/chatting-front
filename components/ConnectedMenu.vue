<template>
    <div class="connected-menu">
        <div class="servers" v-if="useUserStore().user !== null && useUserStore().user !== undefined">
            <div class="server" v-for="server in useUserStore().user.servers" :key="server.id">
                <NuxtLink @click="refreshData" :to="'/chat/' + server.id"><h3>{{ server.name }}</h3></NuxtLink>
            </div>

            <div class="add-server server">
                <NuxtLink to="/server/add"><h3>Add new server</h3></NuxtLink>
            </div>
        </div>

        <div class="channels" v-if="serverSelected !== null">
            <div class="channel" v-for="channel in serverSelected.channels" :key="channel.id">
                <NuxtLink :to="'/chat/' + serverSelected.id + '/' + channel.id"><h3>{{ channel.name }}</h3></NuxtLink>
            </div>

            <div class="add-channel channel">
                <NuxtLink :to="'/server/' + serverSelected.id + '/add'"><h3>Add new channel</h3></NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .connected-menu {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;

        width: 35%;
    }

    .servers {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .server {
        padding: 10px;
        border: 1px solid black;
        border-radius: 5px;
        margin-bottom: 10px;
    }

    .add-server {
        padding: 10px;
        border: 1px solid black;
        border-radius: 5px;
        margin-bottom: 10px;
    }

    .channels {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .channel {
        padding: 10px;
        border: 1px solid black;
        border-radius: 5px;
        margin-bottom: 10px;
    }

    .add-channel {
        padding: 10px;
        border: 1px solid black;
        border-radius: 5px;
        margin-bottom: 10px;
    }

    h3 {
        margin: 0;
    }

</style>

<script setup>
const user = useUserStore().user;
console.log(user);

let params = useRoute().params?.server_id;

const serverSelected = ref(null);


const refreshData = () => {
    console.log('refreshing data');
    params = useRoute().params?.server_id;
    console.log('params', params, user);
    if (params !== undefined && user !== null && user !== undefined) {
        console.log('params', params);
        serverSelected.value = user.servers.find(server => server.id === +params);
        console.log(serverSelected.value.id);
    }
}

</script>