export function dateFormat(originalDate){
    const options = {  month: 'short', day: 'numeric' ,year: 'numeric',}
    const date = new Date(originalDate);  // 2009-11-10
        const finalDate = date.toLocaleString('en-US', options);
        return String(finalDate)
}


