import { GoogleLogin } from 'nativescript-google-login';
import * as application from "@nativescript/core/application";

       
console.log('LLEGO DESDE EL JS');
        if(global.isIOS){
            GoogleLogin.init({
                google: {
                    initialize: true,
                    serverClientId: "",
                    clientId: "",
                    isRequestAuthCode: true
                },
                viewController: application.ios.rootController
            });
    
        } else {
            GoogleLogin.init({
                google: {
                    initialize: true,
                    serverClientId: "",
                    clientId: "",
                    isRequestAuthCode: true
                },
                activity: application.android.foregroundActivity
            });
        }
        
    
export  function login() {
        GoogleLogin.login(result=>{
            console.dir(result);
        });

    }
