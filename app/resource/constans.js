
export const ERROR_MESSAGE_REGISTER = {
}

export const DEFAULT_CARD_SUBSCRIPTION = [{
  
      tittle: "",
      class:'label_skeleton',
      mount: "",
      color: "#8E8B8B",
      text: "",
      width:'250',
      height:'2008',
      recurrence:''
    
}]


export const DEFAULT_CARD_HISTORY = [ {
  subscription:"",
  mount:"",
  date:"",
  card:"",
  color:"#8E8B8B",
  typeCard:"",
  class:'label_skeleton',
  width:"336",
  height:"87"

},
{
  subscription:"",
  mount:"",
  date:"",
  card:"",
  color:"#8E8B8B",
  typeCard:"",
  class:'label_skeleton',
  width:"336",
  height:"87"

},
{
  subscription:"",
  mount:"",
  date:"",
  card:"",
  color:"#8E8B8B",
  typeCard:"",
  class:'label_skeleton',
  width:"336",
  height:"87"

},
]



export const DEFAULT_POPULAR_PROGRAMS =  [
    {
      img: "~/assets/images/eskeleton.png",
      text: "",
      width: 275,
      colorText: "",
      height: 192,
      class:'label_skeleton'
    },
    {
      img: "~/assets/images/eskeleton.png",
      text: "",
      width: 275,
      colorText: "",
      height: 192,
      class:'label_skeleton'
    }, {
      img: "~/assets/images/eskeleton.png",
      text: "",
      width: 275,
      colorText: "",
      height: 192,
      class:'label_skeleton'
    },
  ]

  export const DEFAULT_LIST_PROGRAMS =  [
    {
      img: "~/assets/images/eskeleton.png",
      text: "",
      width: "100%",
      colorText: "",
      height: 192,
      class:'label_skeleton'
    },
    {
      img: "~/assets/images/eskeleton.png",
      text: "",
      width: "100%",
      colorText: "",
      height: 192,
      class:'label_skeleton'
    }, {
      img: "~/assets/images/eskeleton.png",
      text: "",
      width: "100%",
      colorText: "",
      height: 192,
      class:'label_skeleton'
    },
  ]


export const DEFAULT_RECOMMENDATED = [
    {
      img: "~/assets/images/eskeleton.png",
      text: "",
      width: 275,
      height: 96,
      colorText: "#FFFFFF",
      class:'label_skeleton'
    },
    {
      img: "~/assets/images/eskeleton.png",
      text: "",
      width: 275,
      height: 96,
      
      colorText: "#FFFFFF",
      class:'label_skeleton'
    },
    {
      img: "~/assets/images/eskeleton.png",
      text: "",
      width: 275,
      height: 96,
      colorText: "#FFFFFF",
      class:'label_skeleton'
    },
  ]
export const  getDefaultMyPrograms = (props)=>{
  return [
        {
        img: "~/assets/images/background_white.JPG",
        text: "Add Program",
        width: "100%",
        colorText: "#949494",
        height: 173,
        url: "/list-programs",
        props: props
      }
    ]
}

  export const DEFAULT_MY_PROGRAMS_LOADING = [
    {
        img: "~/assets/images/eskeleton.png",
        text: "",
        width: "100%",
        colorText: "#949494",
        height: 173,
        class:'label_skeleton'
      },
      {
        img: "~/assets/images/eskeleton.png",
        text: "",
        width: "100%",
        colorText: "#949494",
        height: 173,
        class:'label_skeleton'
      }
  ]