 import moment from "moment";
 import { isIOS } from "@nativescript/core/platform";
 import * as utils from "@nativescript/core/utils/utils";
 import * as app from "@nativescript/core/application";
 
//  export function GetImageCache() {

// const cache = new Cache();
//     cache.placeholder = fromFile("../assets/images/eskeleton.png");
//     cache.maxRequests = 12;

// // set the placeholder while the desired image is downloaded
// viewModel.set("imageSource", cache.placeholder);
// // Enable download while not scrolling
// cache.enableDownload();

// let cachedImageSource;
// const url = "https://avatars1.githubusercontent.com/u/7392261?v=4";
// // Try to read the image from the cache
// const image = cache.get(url);

// if (image) {
//     // If present -- use it.
//     cachedImageSource = imageSource.fromNativeSource(image);
//     viewModel.set("imageSource", cachedImageSource);
// } else {
//     // If not present -- request its download + put it in the cache.
//     cache.push({
//         key: url,
//         url: url,
//         completed: (image, key) => {
//             if (url === key) {
//                 cachedImageSource = fromNativeSource(image);
//                 viewModel.set("imageSource", cachedImageSource); // set the downloaded image
//             }
//         }
//     });
// }

// // Disable download while scrolling
// cache.disableDownload();
// }





 export function dateFormat(originalDate){
    const options = {  month: 'short', day: 'numeric' ,year: 'numeric',}
    const date = new Date(originalDate);  // 2009-11-10
        const finalDate = date.toLocaleString('en-US', options);
        return String(finalDate)
}


 export function dateFormat_YYYY_DD_MM(originalDate){

    const date = new Date(originalDate)

        return String(date.toISOString().split('T')[0])
}

export function dateFormat_YYYYMMDD(originaldate) {
    
        const date = new Date(originaldate)
    return moment(date).format("YYYY-MM-DD")
}

export function getValueById(objeto,id,key){
        const index = objeto.findIndex( e => e.id === id)

    return objeto[index][key]
}

export function getValueByIdArray(lista,id,key){

        console.log('lista',lista,id,key)

    const elemento = lista.find( e => e.id === id)

return elemento[key]
}


export const hideKeyboard = () => {
  if (isIOS) {
    app.ios.nativeApp.sendActionToFromForEvent(
      "resignFirstResponder",
      null,
      null,
      null
    );
  } else {
    utils.ad.dismissSoftInput();
  }
};