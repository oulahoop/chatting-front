export class Channel {
    id: number = -1;
    name: string = '';
    server_id: number = -1;
    messages: string[] = [];

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.server_id = data.server_id;
        this.messages = data.messages;
    }
}