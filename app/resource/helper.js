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
