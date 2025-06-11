import { Auth } from "./auth";
import { APIClient } from "./client";
import { User } from "./user";




export class LinkTree {
    private client : APIClient;
    public auth : Auth;
    public user : User;


    constructor(baseURL : string){
        this.client = new APIClient(baseURL);
        this.auth = new Auth(this.client);
        this.user = new User(this.client);
    }
}