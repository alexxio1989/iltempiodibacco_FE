import { EndPoint } from 'src/app/Constants';


export class ServiceCore{

    static isLocal: true;

    public static getAPI_ENDPOINT(){
        if(this.isLocal){
            return EndPoint.API_ENDPOINT_LOCAL;
        } else {
            return EndPoint.API_ENDPOINT_PROD;
        }
    }
}