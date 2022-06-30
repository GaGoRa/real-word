import { Http,HttpResponse } from '@nativescript/core'
import cache from '../store/cache/cache.android'


export const baseUrl = "https://realworld.uscreativity.com"

const EXPREG_HTTP_CODE ={
  success : new RegExp(/^[2][0-9]{0,2}$/),
  bad: new RegExp(/^[4][0-9]{0,2}$/)
}

function getHeaders() {
  return {
      "Content-Type": "application/json",
      'token': cache.get('userProfile') ? JSON.parse(cache.get('userProfile')).token : null
  }
}


export function apiPost(body,path){

// export function createUser(body,onSucces,onError){
  return  new Promise((resolve, reject) => {
    Http.request({
      method: "post",
      url: `${baseUrl}/api${path}`,
      headers: getHeaders(),

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
        url: `${baseUrl}/api${path}`,
        headers: getHeaders()
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

