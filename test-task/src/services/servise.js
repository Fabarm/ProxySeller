import axios from "axios";

export default class Service {
    static async getUsers() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    }
    static async getAlbums() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
        return response.data;
    }
}
