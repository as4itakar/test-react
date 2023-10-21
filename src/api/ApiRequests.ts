import axios from "axios"
import IUser from "../models/IUser"

export class ApiRequests{

    static async getUsers(): Promise<IUser[]>{
        const response = await axios.get<IUser[]>('http://[::1]:300')
        return response.data
    }



}