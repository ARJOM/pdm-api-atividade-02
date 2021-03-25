import Crud from './crud';
import { v4 as uuidv4 } from 'uuid';

export class Answer implements Crud{
    id?: String;
    id_survey?: number;
    id_discente?: number;
    value?: number;
    created_at?: String;

    constructor(id_survey?:number,id_discente?:number,value?:number,created_at?:String){
        this.id = uuidv4();
        this.id_discente = id_discente;
        this.id_survey = id_survey;
        this.value = value;
        if(created_at != null){
            this.created_at = created_at;
        }else{
            this.created_at = new Date().toString();
        }
    }
    create(): any {
        throw new Error("Method not implemented.");
    }
    readById(id: String):any {
        throw new Error("Method not implemented.");
    }
    readAll(): any {
        throw new Error("Method not implemented.");
    }
    update(): any {
        throw new Error("Method not implemented.");
    }
    delete(id: String): any {
        throw new Error("Method not implemented.");
    }

}