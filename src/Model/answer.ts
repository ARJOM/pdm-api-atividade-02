import Crud from './crud';

export class Answer implements Crud{
    id?: number;
    id_survey?: number;
    id_discente?: number;
    value?: number;
    created_at?: String;

    constructor(id_survey?:number,id_discente?:number,value?:number,created_at?:String){
        this.id_discente = id_discente;
        this.id_survey = id_survey;
        this.value = value;
        if(created_at != null){
            this.created_at = created_at;
        }else{
            this.created_at = new Date().toDateString();
        }
    }
    create(novo: any): any {
        throw new Error("Method not implemented.");
    }
    readById(id: number):any {
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