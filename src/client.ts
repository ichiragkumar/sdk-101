import axios, { AxiosInstance } from 'axios';



export class APIClient {
    private client : AxiosInstance;


    constructor(baseURL : string, private token? : string) {
        this.client = axios.create({
            baseURL
        });

        this.client.interceptors.request.use((config:any) => {
        if (this.token) {
            config.headers.Authorization = `Bearer ${this.token}`;
        }
        return config;
        });
    }


    setToken(token : string){
        this.token = token;
    }

    getInstance(){
        return this.client;
    }


    
}