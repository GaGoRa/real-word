 import moment from "moment";
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


