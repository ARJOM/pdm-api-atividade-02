import Crud from './crud';

export class Subject implements Crud{
    id?: number;
    name?: String;
    workload?: String;
    created_at?: String;

    constructor(name?:String,workload?:String,created_at?:String){
        this.name = name;
        this.workload = workload;
        if(created_at != null){
            this.created_at = created_at;
        }else{
            this.created_at = new Date().toDateString();
        }
    }
    create(novo: any): any {
        throw new Error("Method not implemented.");
    }
    readById(id: number): any {
        throw new Error("Method not implemented.");
    }
    readAll(): any[] {
        throw new Error("Method not implemented.");
    }
    update(objAtt: any): any {
        throw new Error("Method not implemented.");
    }
    delete(id: number): any {
        throw new Error("Method not implemented.");
    }
}