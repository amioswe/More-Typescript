interface Status<T>{
 data:T;
 name:string;
}

const userexperience:Status<number>={

data:74373,
name:'Amio Das',

}

const personalDetails:Status<boolean>={
    data:true,
    name:'fuckingLover with me',
}

const samneKheletehobe:Status<string>={

    data:'Ami eibar mal khabo na ',
    name:'Durjoy',
}

function getInfo<item>(value:item[]):number{
return value.length

}
getInfo<string>(['ueiruerueri']);

getInfo<number>([7294743049]);