export default interface Crud{
    create():any;
    readById(id:String):any;
    readAll():any;
    update():any;
    delete(id:String):any;
}