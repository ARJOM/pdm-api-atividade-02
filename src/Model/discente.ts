class Discente implements Crud{
    id?: number;
    name?: String;
    email?: String;
    subjects?: [Subject];
    created_at?: String;

    constructor(name?:String,email?:String,subjects?:[Subject],created_at?:String){
        this.email = email;
        this.name = name;
        this.subjects = subjects;
        if(created_at != null){
            this.created_at = created_at;
        }else{
            this.created_at = Date.now().toString();
        }
    }
    create(novo: any): boolean {
        throw new Error("Method not implemented.");
    }
    readById(id: number) {
        throw new Error("Method not implemented.");
    }
    readAll(): [any] {
        throw new Error("Method not implemented.");
    }
    update(objAtt: any): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }

}