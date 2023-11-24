import { useUserStore } from '@/stores/UserStore';
import User from '@/models/User'

const API_BASE_URL = 'http://localhost:8000/api';

function postData(path, data) {
    if (!process.client) {
        return null;
    }

    return fetch(API_BASE_URL + path, {
        method: 'POST', 
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    })
}

function getData(path) {
    if (!process.client) {
        return null;
    }

    return fetch (API_BASE_URL + path, {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    })
}

export async function caLogin(email, password) {
    let data = {
        'email' : email,
        'password' : password
    };

    let response = await postData("/login", data);

    if (response == null) {
        return response;
    }

    return response.json();
}

export async function isLoggedIn() {
    if (localStorage.getItem('token') == null) {
        return false;
    }

    let userStore = useUserStore();

    if (userStore.user == null) {
        let me = await caMe();

        if (me == null) return false;

        let userObject = new User(me.data.id, me.data.name, '', me.data.email);

        userStore.setUser(userObject);
    }

    return true;
}

export async function caMe() {
    if (!process.client) {
        return null;
    }

    if (localStorage == null || localStorage == undefined) {
        return null;
    }

    let response = await getData("/me")

    if (response == null) {
        return response;
    }

    return response.json();
}