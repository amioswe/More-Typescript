type userRoll="User" | "Modaretor" | "Guest" ;

interface User{
name:string,
roll:userRoll,
email:string

}

interface Modarator extends User{
name:string,
paymentusers:string[];
}
 

interface Guest extends User{

    guestDetais:string[];
}

const fulldetails:Modarator={

name:'Amiodas',
email:'sfdfgdgg',
paymentusers:['dyudhsdh','jijwdjpj','jwh'],

roll:'User'



}