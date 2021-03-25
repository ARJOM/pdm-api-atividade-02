import { db } from '../app';
import Crud from './crud';
import { v4 as uuidv4 } from 'uuid';

export class Subject implements Crud {
    id?: String;
    name?: String;
    workload?: String;
    created_at?: String;

    constructor(name?: String, workload?: String, created_at?: String) {
        this.id = uuidv4();
        this.name = name;
        this.workload = workload;
        if (created_at != null) {
            this.created_at = created_at;
        } else {
            this.created_at = new Date().toString();
        }
    }
    create(): any {
        db.run(`INSERT INTO subjects(id,name,workload,created_at) VALUES(?,?,?,?)`, [this.id, this.name, this.workload, this.created_at], function (err) {
            if (err) {
                return err.message;
            } 
        });
        return this;
    }
    readById(id: String): any {
        throw new Error("Method not implemented.");
    }
    readAll(): any[] {
        throw new Error("Method not implemented.");
    }
    update(): any {
        throw new Error("Method not implemented.");
    }
    delete(id: String): any {
        throw new Error("Method not implemented.");
    }
}