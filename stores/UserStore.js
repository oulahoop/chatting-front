import {defineStore} from 'pinia';

export const useUserStore = defineStore('UserStore', () => {
    const user = ref(null);

    function setUser(userToLog) {
        user.value = userToLog
    }

    return {user, setUser};
});