import {defineStore} from 'pinia';

export const useUserStore = defineStore('UserStore', () => {
    const user = ref(null);

    function setUser(userToLog) {
        user.value = userToLog
    }

    function logout() {
        user.value = null;
        localStorage.removeItem('token');
    }

    function addServer(server) {
        user.value.servers.push(server);
    }

    function addChannel(server, channel) {
        user.value.servers.find(s => s.id === server.id).channels.push(channel);
    }

    function addMessage(server, channel, message) {
        user.value.servers.find(s => s.id === server.id).channels.find(c => c.id === channel.id).messages.push(message);
    }

    return {user, setUser, logout, addServer, addChannel, addMessage};
});