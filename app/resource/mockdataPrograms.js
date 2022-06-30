export const dataTest = {
    "package_was_not_purchased": {
        "id": 2,
        "name": "ANIMAL",
        "description": "<p>Animal</p>",
        "program_category_id": 1,
        "video": "programs/video/ayCZcOWnMvKmMOe1Ur0GPGfE195feU-metaV2hhdHNBcHAgVmlkZW8gMjAyMi0wMy0yMiBhdCA3LjU2LjI3IFBNLm1wNA==-.bin",
        "number_of_days": 7,
        "image": "programs/images/HMChRMMF280D7MkqP0hbYXDhJ8Vpxd-metaYmxvYg==-.png",

    },
    "package_gold_activate_program_no_registered": {
        "id": 2,
        "name": "ANIMAL",
        "description": "<p>Animal</p>",
        "program_category_id": 1,
        "video": "programs/video/ayCZcOWnMvKmMOe1Ur0GPGfE195feU-metaV2hhdHNBcHAgVmlkZW8gMjAyMi0wMy0yMiBhdCA3LjU2LjI3IFBNLm1wNA==-.bin",
        "number_of_days": 7,
        "image": "programs/images/HMChRMMF280D7MkqP0hbYXDhJ8Vpxd-metaYmxvYg==-.png",

        "status_package": {
            "id": 1,
            "name": "Gold",
            "status": true, // activo :true Vencido false
            "message":""
        },
        "status_program": { //si el programa en el que entro esta registrado o no o nulo
            "id": 1,
            "status": false,
        },
        "details": [
            {
                "id": 1,
                "program_id": 2,
                "name": "Dia 1",
                "description": "<p>primer dia</p>",
                "number": 1,
                "status": false, // cumpli o no cumpli eldia 
                "muscular_group": 'leg',
                "exercise":[{
                        "id": 1,
                        "title": "Biceps",
                        "video": "programs/day/routine/video/WhatsApp Video 2022-03-22 at 7.56.27 PM.mp4",
                        "sets": 12,           
                        "completed":true | false,
                        "repetitions": 4,
                        "program_id": 2,
                        "program_day_id": 1,
                        "log":[{
                            "set":1,
                            "repetitions":3,
                            "Weight":100,
                            }]
                         },
                        ]
                   },
                   {
                    "id": 2,
                    "program_id": 2,
                    "name": "Dia 1",
                    "description": "<p>primer dia</p>",
                    "number": 2,
                    "status": false, // cumpli o no cumpli eldia 
                    "muscular_group": 'leg',
                    "exercise":[{
                            "id": 2,
                            "title": "Biceps",
                            "video": "programs/day/routine/video/WhatsApp Video 2022-03-22 at 7.56.27 PM.mp4",
                            "sets": 12,           
                            "completed":true | false,
                            "repetitions": 4,
                            "program_id": 2,
                            "program_day_id": 1,
                            "log":[{
                                "set":1,
                                "repetitions":3,
                                "Weight":100,
                                }]
                             },
                            ]
                       }
        ]
    },   
    "package_gold_activate_program_registered": {
        "id": 2,
        "name": "ANIMAL",
        "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
        "program_category_id": 1,
        "video": "programs/video/ayCZcOWnMvKmMOe1Ur0GPGfE195feU-metaV2hhdHNBcHAgVmlkZW8gMjAyMi0wMy0yMiBhdCA3LjU2LjI3IFBNLm1wNA==-.bin",
        "number_of_days": 7,
        "image": "programs/images/HMChRMMF280D7MkqP0hbYXDhJ8Vpxd-metaYmxvYg==-.png",
       
        "status_package": {
            "id": 1,
            "name": "Gold",
            "status": true ,
            "message":""
        },
        "status_program": { //si el programa en el que entro esta registrado o no o nulo
            "id": 1,
            "status": true,
        },
        "details": [
            {
                "id": 1,
                "program_id": 2,
                "name": "Dia 1",
                "description": "<p>primer dia</p>",
                "number": 1,
                "status": false, // cumpli o no cumpli eldia 
                "muscular_group": 'leg',
                "exercise":[{
                        "id": 1,
                        "title": "Biceps",
                        "video": "programs/day/routine/video/WhatsApp Video 2022-03-22 at 7.56.27 PM.mp4",
                        "sets": 12,           
                        "completed":true | false,
                        "repetitions": 4,
                        "program_id": 2,
                        "program_day_id": 1,
                        "log":[{
                            "set":1,
                            "repetitions":3,
                            "Weight":100,
                            }]
                         },
                        ]
                   }
        ]
    },
    "package_gold_activate_program_registered_package_defeated": {
    "id": 2,
    "name": "ANIMAL",
    "description": "<p>Animal</p>",
    "program_category_id": 1,
    "video": "programs/video/ayCZcOWnMvKmMOe1Ur0GPGfE195feU-metaV2hhdHNBcHAgVmlkZW8gMjAyMi0wMy0yMiBhdCA3LjU2LjI3IFBNLm1wNA==-.bin",
    "number_of_days": 7,
    "image": "programs/images/HMChRMMF280D7MkqP0hbYXDhJ8Vpxd-metaYmxvYg==-.png",
   
    "status_package": {
        "id": 1,
        "name": "Gold",
        "status": false ,
        "message":"el programa no esta pago"
    },
    "status_program": { 
        "id": 1,
        "status": true,
    },
    "details": [
        {
            "id": 1,
            "program_id": 2,
            "name": "Dia 1",
            "description": "<p>primer dia</p>",
            "number": 1,
            "status": false, // cumpli o no cumpli eldia 
            "muscular_group": 'leg',
            "exercise":[{
                    "id": 1,
                    "title": "Biceps",
                    "video": "programs/day/routine/video/WhatsApp Video 2022-03-22 at 7.56.27 PM.mp4",
                    "sets": 12,           
                    "completed":true | false,
                    "repetitions": 4,
                    "program_id": 2,
                    "program_day_id": 1,
                    "log":[{
                        "set":1,
                        "repetitions":3,
                        "Weight":100,
                        }]
                     },
                    ]
               }
    ]
    },
    "package_gold_activated_program_no_registered_and_package_defeated": {
    "id": 2,
    "name": "ANIMAL",
    "description": "<p>Animal</p>",
    "program_category_id": 1,
    "video": "programs/video/ayCZcOWnMvKmMOe1Ur0GPGfE195feU-metaV2hhdHNBcHAgVmlkZW8gMjAyMi0wMy0yMiBhdCA3LjU2LjI3IFBNLm1wNA==-.bin",
    "number_of_days": 7,
    "image": "programs/images/HMChRMMF280D7MkqP0hbYXDhJ8Vpxd-metaYmxvYg==-.png",
   
    "status_package": {
        "id": 1,
        "name": "Gold",
        "status": false ,
        "message":"el programa no esta pago"
    },
    "status_program": { 
        "id": 1,
        "status": false,
    },
    "details": [
        {
            "id": 1,
            "program_id": 2,
            "name": "Dia 1",
            "description": "<p>primer dia</p>",
            "number": 1,
            "status": false, // cumpli o no cumpli eldia 
            "muscular_group": 'leg',
            "exercise":[{
                    "id": 1,
                    "title": "Biceps",
                    "video": "programs/day/routine/video/WhatsApp Video 2022-03-22 at 7.56.27 PM.mp4",
                    "sets": 12,           
                    "completed":true | false,
                    "repetitions": 4,
                    "program_id": 2,
                    "program_day_id": 1,
                    "log":[{
                        "set":1,
                        "repetitions":3,
                        "Weight":100,
                        }]
                     },
                    ]
               }
    ]
    }
}

export const dataTestHistory = [{
               'name' :'cleiber1',
              'amount' : '2323.222',
              'date': ' Nov 9, 2009',
              'invoice_pdf':'https://pay.stripe.com/invoice/acct_1JFMxBFllRtR3x1g/live_YWNjdF8xSkZNeEJGbGxSdFIzeDFnLF9MblhLNDVMRExPbTVaaW9nTDQ4bm1XUmQ3WkJ3NXpKLDQ3MTUzNjY00200XwkbYc2d/pdf?s=ap',
              'status' :'pay',
              'pm_last_four' : '3345',
              'pm_type' :'visa' ,
},
{
    'name' :'cleiber',
   'amount' : '2323.222',
   'date': ' Nov 9, 2009',
   'invoice_pdf':'https://www.ucalp.edu.ar/wp-content/uploads/2022/03/lic-dise%C3%B1o-VISUAL-22.pdf',
   'status' :'pay',
   'pm_last_four' : '3345',
   'pm_type' :'visa' ,
},
{
    'name' :'cleiber',
   'amount' : '2323.222',
   'date': ' Nov 9, 2009',
   'invoice_pdf':'https://google.com',
   'status' :'pay',
   'pm_last_four' : '3345',
   'pm_type' :'visa' ,
}
]

export function apiMock(data) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(data)
        }, 1000);
    })
}