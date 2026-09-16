interface Students{
    name:string,
    id:number,
    price:number,
    code:number,
    description:string
};

const personal:Students={
    name:'AmioDas',
    id:241,
    price:2344,
    code:8627323,
    description:'wyyiuqweuiwyiuririircnudfsnbsdf  eyehreyrei'
};
const payment:Students={
    name:'AmioDas',
    id:241,
    price:2344,
    code:8627323,
    description:'wyyiuqweuiwyiuririircnudfsnbsdf  eyehreyrei'
};
const mark:Students={
    name:'AmioDas',
    id:241,
    price:2344,
    code:8627323,
    description:'wyyiuqweuiwyiuririircnudfsnbsdf  eyehreyrei'
};
const team:Students[]=[payment,mark,{

 name:'AmioDas',
    id:241,
    price:2344,
    code:8627323,
    description:'wyyiuqweuiwyiuririircnudfsnbsdf  eyehreyrei'

}];


function printEmployeeDetails(employee:Students):void{

    console.log(`Name:${employee.name}`);
    console.log(`Id:${employee.id}`);
    console.log(`Price:${employee.price}`);

}
printEmployeeDetails({name:'amio',id: 3233, price: 333,description:'wewewe',code:232});
