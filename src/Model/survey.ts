import Crud from './crud';

export class Survey implements Crud{
    id?: number;
    title?: String;
    description?: String;
    created_at?: String;

    constructor(title?:String,description?:String,created_at?:String){
        this.title = title;
        this.description = description;
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