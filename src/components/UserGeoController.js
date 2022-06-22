import axios from "axios";


export default class UserGeoController{
    static async getUserGeo(){
        const response = await axios.get("https://ipapi.co/json/");
        return response.data;
    }

}