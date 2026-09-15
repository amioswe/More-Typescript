
type Gender=   "Male"| "Female" |"Others";
type Student={
name:string,age:number,bsc:string,adress:string,gender?:Gender;

}


const personalDetails:Student = {

name:'AmioDas',
age:23,
bsc:'software enginering',
adress:'dhaka',

};
const personalDetails2:Student ={

name:'AmioDas',
age:23,
bsc:'software enginering',
adress:'dhaka'


}



const disPLay=personalDetails.age;

console.log(disPLay);
