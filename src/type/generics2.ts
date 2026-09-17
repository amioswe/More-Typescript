function UserState<T>(value:T){

}

UserState<string>('yuwyiuur');
UserState<number>(324355);
UserState<boolean>(false);

interface User{
 name:string;
 email:string;

}

UserState<User>({name:'ererre',email:'sdfdffdf'});
UserState<User | null >(null);