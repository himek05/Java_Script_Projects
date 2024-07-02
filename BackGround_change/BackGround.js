const Zodiac =document.getElementById("Zodiac")
const body = document.body;
const changebackground =()=>{
    switch(Zodiac.value){
        case "aries":
        body.style.backgroundColor ="#90EE90"
        break;
       
        case "tarus":
        body.style.backgroundColor ="#E6E6FA"
        break;
        
        case "gemini":
        body.style.backgroundColor ="#FFDAB9"
        break;

        case "cancer":
        body.style.backgroundColor ="#C4EA70"
        break;

        case "leo":
        body.style.backgroundColor ="#FFB190"
        break;

        case "virgo":
        body.style.backgroundColor ="#FF5563"
        break;


        case "libra":
        body.style.backgroundColor ="#FBD1D1"
        break;

        case "scropio":
        body.style.backgroundColor ="#B5D0E0"
        break;

        case "sagittarius":
        body.style.backgroundColor ="#E1F7B0"
        break;

        case "aquarius":
        body.style.backgroundColor ="#FD8A04"
        break;

        case "capricorn":
        body.style.backgroundColor ="#B8B4BE"
        break;

        case "pisces":
        body.style.backgroundColor ="#CC9E08"
        break;

        default:
        body.style.backgroundColor ="#F4FFDC"
        break;
    }
};
    