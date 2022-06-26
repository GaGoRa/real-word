import { Http,HttpResponse } from '@nativescript/core'

const baseUrl = "https://realworld.uscreativity.com/api"

const EXPREG_HTTP_CODE ={
  success : new RegExp(/^[2][0-9]{0,2}$/),
  bad: new RegExp(/^[4][0-9]{0,2}$/)
}


export function apiPost(body,path){
// export function createUser(body,onSucces,onError){
  return  new Promise((resolve, reject) => {
    Http.request({
      method: "post",
      url: `${baseUrl}${path}`,
      headers: {
          "Content-Type": "application/json",
      },
      content: JSON.stringify(body)
    }).then((res) => {
        if(String(res.statusCode).match(EXPREG_HTTP_CODE.success)){
          resolve(res.content.toJSON())
        }else{
          reject(res)
        }
    }).catch((e) => {
      console.log('error post',e)
      reject(e)
    });
  });
  
}

export function apiGet(path){
  // export function createUser(body,onSucces,onError){
    return  new Promise((resolve, reject) => {
      Http.request({
        method: "GET",
        url: `${baseUrl}${path}`,
        headers: {
            "Content-Type": "application/json",
        },
        //content: JSON.stringify(body)
      }).then((res) => {
          if(String(res.statusCode).match(EXPREG_HTTP_CODE.success)){
            resolve(res.content.toJSON())
          }else{
            reject(res)
          }
      }).catch((e) => {
        console.log('error post',e)
        reject(e)
      });
    });
    
  }

