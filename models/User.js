export default class User {
    id = null;
    name = null;
    avatar_url = null;
    email = null;

    constructor(id, name, avatar_url, email) {
        this.id = id;
        this.name = name;
        this.avatar_url = avatar_url;
        this.email = email;
    }
}