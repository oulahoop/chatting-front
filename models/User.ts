import { Server } from "./Server";

export class User {
    id: number = -1;
    name: string = '';
    avatar_url: string = '';
    email: string = '';
    servers: Server[] = [];

    constructor(data: any) {
        console.log(data);
        
        this.id = data['id'];
        this.name = data['name'];
        this.avatar_url = data['avatar_url'];
        this.email = data['email'];
        this.servers = data['servers'].map((server: any) => new Server(server));
    }
}