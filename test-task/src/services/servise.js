import axios from "axios";

export default class Service {
    static async getMe(str) {
        const response = await axios.get('https://jsonplaceholder.typicode.com' + str);
        return response.data;
    }
}
