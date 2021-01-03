import { EndPoint } from 'src/app/Constants';
import { environment } from '../../../environments/environment';

export class ServiceCore{

    public static baseURl = environment.API_ENDPOINT;
    public static baseURlPMPrjt = environment.API_PM_MANAGER;
    public static stripe_token = environment.STRIPE_TOKEN

}