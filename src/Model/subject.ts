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
            this.created_at = new Date().toDateString();
        }
    }
    create(novo: any): any {
        db.run(`INSERT INTO subjects(name) VALUES(?)`, ['C'], function (err) {
            if (err) {
                return console.log(err.message);
            }
            // get the last insert id
            console.log(`A row has been inserted with rowid ${this.lastID}`);
        });
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