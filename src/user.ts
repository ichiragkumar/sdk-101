import { APIClient } from "./client";
import { UserProfile } from "./types";


export class User {
    constructor(private client : APIClient){}

    async getProfile(): Promise<UserProfile>{
        const res = await this.client.getInstance().get("/user/profile/")
        return res.data;
    }

}