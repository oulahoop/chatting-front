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
            "Authorization": "Bearer " + localStorage.getItem('token'),
            "Content-Type": "application/json",
            "Accept": "application/json"
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

export async function caRegister(email, password, name) {
    let data = {
        'email' : email,
        'password' : password,
        'name' : name
    };

    let response = await postData("/register", data);

    if (response == null) {
        return response;
    }

    return response.json();
}

export async function isLoggedIn() {
    if (localStorage.getItem('token') == null) {
        return false;
    } else {
        if (useUserStore().user != null) {
            return true;
        }

        let response = await caMe();

        if (response == null) {
            return false;
        }

        useUserStore().setUser(response.data);

        return true;
    }
}

export async function caMe() {
    if (!process.client) {
        return null;
    }

    if (localStorage == null || localStorage == undefined) {
        return null;
    }

    let response = await getData("/me")

    if (response == null || response.ok == false) {
        return null;
    }

    return await response.json();
}

export async function caCreateServer(name, imageUrl) {
    let data = {
        'name' : name,
        'image_url' : imageUrl
    };

    let response = await postData("/server", data);

    if (response == null) {
        return response;
    }

    return response.json();
}

export async function caCreateChannel(serverId, name) {
    let data = {
        'server_id' : serverId,
        'name' : name
    };

    let response = await postData("/channel", data);

    if (response == null) {
        return response;
    }

    return response.json();
}

export async function caCreateMessage(channelId, content) {
    let data = {
        'channel_id' : channelId,
        'content' : content
    };

    let response = await postData("/messages", data);

    if (response == null) {
        return response;
    }

    return response.json();
}

export async function caGetChannelMessages(channelId) {
    let response = await getData("/messages/channel/" + channelId);

    if (response == null) {
        return response;
    }

    return response.json();
}

export async function caJoinServer(serverId) {
    let data = {
        'server_id' : serverId
    };

    let response = await postData("/server/join", data);

    if (response == null) {
        return response;
    }

    return response.json();
}