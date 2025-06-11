import { APIClient } from "./client";
import { AuthResponse } from "./types";



export class Auth{
    constructor(private client : APIClient){}


    async login(email: string, password: string): Promise<AuthResponse>{
        const res = await this.client.getInstance().post("/auth/login/", {email, password})
        const token = res.data.token;
        this.client.setToken(token);
        return {token};
    }


    async logout(): Promise<void>{
        await this.client.getInstance().post("/auth/logout/");
        this.client.setToken("");
    }
}