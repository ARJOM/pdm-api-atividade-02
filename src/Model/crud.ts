export default interface Crud{
    create(novo:any):any;
    readById(id:number):any;
    readAll():any[];
    update(objAtt:any):any;
    delete(id:number):any;
}