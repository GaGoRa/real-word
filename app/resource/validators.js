
function __returnMessage(message, params) {
    return message
}

const ERRORMESSAGES = {
    requireErrorMessage: "this value is required",
    minLegthErrorMessage: (params) => `min ${params} characters`,
    maxLegthErrorMessage: (params) => `max ${params} characters`,
    typeErrorMessage: "invalid value ",
}

function validRequired(input) {
    return input.length >= 1
}
export default function validatorForms(
    {
    type="string",
    minLength=2,
    maxLength=50,
    input,
    require=false,
    messageError="You have Errors"
}) {
    //  @type: string = phone, email,text
    //  @minLength:number = 2
    //  @maxLength:number = 10
    //  @input:text = input forms
    //  @require:bolean = false
    //  @messageError:string = custom text errorMessages

    // return same input 

    const typeRegExp= {
        phone:new RegExp(/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/
),
        email:new RegExp(/^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/),
        text:new RegExp(/^[a-z0-9_-]{3,16}$/),
    }   
    if(require){ 
        if(!validRequired(input)) return __returnMessage(ERRORMESSAGES.requireErrorMessage)
    }
    if(!typeRegExp[`${type}`].test(input)) return  __returnMessage(ERRORMESSAGES.typeErrorMessage)
    if(input.length >= minLength) return __returnMessage(ERRORMESSAGES.minLegthErrorMessage(minLength))
    if(input.length <= maxLength) return __returnMessage(ERRORMESSAGES.minLegthErrorMessage(maxLength))
    return input
          //  throw new Error(" parameteres inputs is invalid ");
    

}