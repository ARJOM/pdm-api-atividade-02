import { db } from '../app';
import Crud from './crud';
import { Subject } from './subject';
import { v4 as uuidv4 } from 'uuid';

export class Discente implements Crud{
    id?: String;
    name?: String;
    email?: String;
    subjects?: Subject[];
    created_at?: String;

    constructor(name?:String,email?:String,subjects?:Subject[],created_at?:String){
        this.id = uuidv4();
        this.email = email;
        this.name = name;
        this.subjects = subjects;
        if(created_at != null){
            this.created_at = created_at;
        }else{
            this.created_at = new Date().toString();
        }
    }
    create(): any {
        db.run(`INSERT INTO students(id,name,email,created_at) VALUES(?,?,?,?)`, [this.id, this.name, this.email, this.created_at], function (err) {
            if (err) {
                return err.message;
            } 
        });
        if(this.subjects == undefined){
            this.subjects = [];
        }
        for (let index = 0; index < this.subjects.length; index++) {
            db.run(`INSERT INTO students_subjects(user_id,subject_id,created_at) VALUES(?,?,?)`, [this.id, this.subjects[index].id,new Date().toString()], function (err) {
                if (err) {
                    return err.message;
                } 
            });    
        }
        return this;
    }
    readById(id: String) {
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