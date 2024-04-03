import { User } from "./User";
import { Channel } from "./Channel";

export class Server {
    id: number = -1;
    name: string = '';
    image_url: string = '';
    owner_id: number = -1;
    channels: Channel[] = [];

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.image_url = data.image_url;
        this.owner_id = data.owner_id;
        this.channels = data.channels;
    }
}