import { Http } from '@nativescript/core'

const baseUrl = "https://realworld.uscreativity.com/api"

export function createUser(body,onSucces,onError){
    Http.request({
        url: `${baseUrl}/register`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        content: JSON.stringify(body),
      })
    .then((result) => onSucces(result))
    .catch((error) => onError(error))
    
}
