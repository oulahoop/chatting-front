<template>
    <div class="connected-menu" v-if="user !== null">
        <div class="servers">
            <div class="server" v-for="server in useUserStore().user.servers" :key="server.id" :class="server.id === +useRoute().params?.server_id ? 'current-server' : ''">
                <NuxtLink @click="refreshData(server.id)" :to="'/chat/' + server.id" ><img :src="server.image_url" class="server-image"/></NuxtLink>
            </div>

            <div class="add-server server">
                <NuxtLink to="/server/add"><h3>Add new server</h3></NuxtLink>
            </div>

            <div class="add-server server">
                <NuxtLink to="/server/join"><h3>Join a server</h3></NuxtLink>
            </div>
        </div>

        <ConnectedMenuChannels v-if="serverSelected !== null && serverSelected !== undefined" :serverSelected="serverSelected" />
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

    h3 {
        margin: 0;
    }

    .current-server {
        background-color: #272727;
    }

    .server-image {
        width: 100px;
        height: 100px;
        border-radius: 100%;
    }

</style>

<script setup>
const user = ref(useUserStore().user);
console.log(user);

let params = useRoute().params?.server_id;

const serverSelected = ref(null);


const refreshData = (serverId = null) => {
    if (serverId !== null) {
        params = serverId;
    } else {
        params = useRoute().params?.server_id;
    }

    if (params !== undefined && user !== null) {
        console.log('params', params);
        serverSelected.value = user.value.servers.find(server => server.id === +params);
        console.log(serverSelected.value.id);
    }
}

</script>