interface Crud{
    create(novo:any):boolean;
    readById(id:number):any;
    readAll():[any];
    update(objAtt:any):boolean;
    delete(id:number):boolean;
}