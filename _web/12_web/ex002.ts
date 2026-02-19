class estudante {
    private _id: number;
   
    constructor (_id: number)
    {
        this._id = _id
    }

}
let estudante1:estudante
estudante1 = new estudante(1)
console.log(`${estudante1}`)