import axios from "axios"
import IUser from "../models/entity/IUser"

export class ApiRequests{

    static async getUsers(): Promise<IUser[]>{
        const response = await axios.get<IUser[]>('http://[::1]:3000')
        return response.data
    }

    static async getUser(name: string): Promise<IUser[]>{
        const respone = await axios.get<IUser[]>('http://[::1]:3000?term=' + name)
        return respone.data
    }



}