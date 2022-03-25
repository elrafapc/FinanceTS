export class Transaction{

    public id: number = 0;
    public description: String = '';

    constructor(id:number, description: String){
        this.id = id;
        this.description = description;
    }
}
