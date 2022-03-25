export class RegisterType{

    public id: number = 0;
    public login: String = '';
    public password: String = '';


    constructor(id:number, login: String, password: String){
        this.id = id;
        this.login = login;
        this.password = password;
    }
}
