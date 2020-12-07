import { EndPoint } from 'src/app/Constants';
import { environment } from '../../../environments/environment';

export class ServiceCore{

    static isLocal= false;

    public static getAPI_ENDPOINT(){
        return environment.API_ENDPOINT;
    }
}