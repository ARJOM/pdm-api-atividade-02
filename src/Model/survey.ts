import Crud from './crud';
import { v4 as uuidv4 } from 'uuid';

export class Survey implements Crud{
    id?: String;
    title?: String;
    description?: String;
    created_at?: String;

    constructor(title?:String,description?:String,created_at?:String){
        this.id = uuidv4();
        this.title = title;
        this.description = description;
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
    update(objAtt: any): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }

}