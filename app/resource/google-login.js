import { GoogleLogin } from 'nativescript-google-login';
import * as application from "@nativescript/core/application";

function ngOnInit() {
        // Init your component properties here.

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
        
        
    }

   function login() {
        GoogleLogin.login(result=>{
            console.dir(result);
        });

    }
