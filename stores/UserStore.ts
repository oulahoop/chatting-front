import {defineStore} from 'pinia';
import {User} from '@/models/User';
import {Server} from '@/models/Server';
import {Channel} from '@/models/Channel';

export const useUserStore = defineStore('UserStore', () => {
    const user: Ref<User | null> = ref(null);

    function setUser(userToLog: User|object) {
        if (userToLog instanceof User) {
            user.value = userToLog;
            return;
        }

        user.value = new User(userToLog);
        /*
        if (userToLog.hasOwnProperty('id') && userToLog.hasOwnProperty('name') && userToLog.hasOwnProperty('avatar_url') && userToLog.hasOwnProperty('email') && userToLog.hasOwnProperty('servers')) {
            user.value = new User(userToLog);
            return;
        }
        */
    }

    function logout() {
        user.value = null;
        localStorage.removeItem('token');
    }

    function addServer(server: Server) {
        if (user.value == null) {
            return;
        }
        user.value.servers.push(server);
    }

    function addChannel(server: Server, channel: Channel) {
        if (user.value == null) {
            return;
        }
        user.value.servers.find((s: Server) => s.id === server.id)?.channels.push(channel);
    }

    function addMessage(server: Server, channel: Channel, message: string) {
        if (user.value == null) {
            return;
        }
        user.value.servers.find((s: Server) => s.id === server.id)?.channels.find((c: Channel) => c.id === channel.id)?.messages.push(message);
    }

    return {user, setUser, logout, addServer, addChannel, addMessage};
});