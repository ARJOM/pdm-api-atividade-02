import Crud from './crud';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../app';

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
            this.created_at = new Date().toString();
        }
    }
    create(): any {
        db.run(`INSERT INTO surveys(id,title,description,created_at) VALUES(?,?,?,?)`, [this.id, this.title, this.description, this.created_at], function (err) {
            if (err) {
                throw new Error(err.message);
            }
        });
        return this;
    }
    readById(id: String): any {
        throw new Error("Method not implemented.");
    }
    readAll(): any {
        throw new Error("Method not implemented.");
    }
    update(): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: String): boolean {
        throw new Error("Method not implemented.");
    }

}