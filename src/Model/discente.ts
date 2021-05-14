import { db } from '../app';
import { Subject } from './subject';
import { v4 as uuidv4 } from 'uuid';
import { } from 'sqlite3';

export class Discente {
    id?: String;
    name?: String;
    email?: String;
    subjects?: Subject[] = [];
    created_at?: String;
    password?: String;

    constructor(name?: String, email?: String, subjects?: Subject[], created_at?: String, password?: String) {
        this.id = uuidv4();
        this.email = email;
        this.name = name;
        this.password = password;

        if (subjects == undefined) {
            this.subjects = [];
        } else {
            this.subjects = subjects;
        };
        if (created_at != null) {
            this.created_at = created_at;
        } else {
            this.created_at = new Date().toString();
        }
    }
    create(): any {
        db.run(`INSERT INTO students(id,name,password,email,created_at) VALUES(?,?,?,?,?)`, [this.id, this.name, this.password, this.email, this.created_at], function (err) {
            if (err) {
                return err.message;
            }
        });
        if (this.subjects == undefined) {
            this.subjects = [];
        }
        for (let index = 0; index < this.subjects.length; index++) {
            // cria disciplina
            const sub = new Subject(this.subjects[index].name, this.subjects[index].workload);
            sub.create();
            
            db.run(`INSERT INTO students_subjects(user_id,subject_id,created_at) VALUES(?,?,?)`, [this.id, sub.id, new Date().toString()], function (err) {
                if (err) {
                    return err.message;
                }
            });
        }
        return this;
    }

    readById(id: String): Promise<any> {
        const sub: Subject = new Subject();
        return new Promise((resolve, reject) => {
            db.get(`Select * from students where id = ?`, id, (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    if (row == undefined) {
                        reject(err);
                    } else {
                        let discente: Discente = new Discente();
                        discente = row;
                        sub.readByUserId(id).then(r => {
                            discente.subjects = r;
                            resolve(discente);
                        })
                    }
                }
            });
        });
    }
    readAll(): Promise<any> {
        const sub: Subject = new Subject();
        return new Promise((resolve, reject) => {
            db.all(`Select * from students`, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    let discentes: Discente[] = [];
                    rows.forEach((row) => {
                        let disc: Discente = row;
                        discentes.push(disc);
                    });
                    resolve(sub.readByStudents(discentes));
                }
            });
        });
    }
    readByEmail(email:String):Promise<any>{
        return new Promise((resolve, reject) => {
            db.get(`Select * from students where email = ?`, email, (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    if (row == undefined) {
                        reject('Student does not exist');
                    } else {
                        let discente: Discente = new Discente();
                        discente = row;
                        resolve(discente);
                    }
                }
            });
        });
    }
    update(): any {
        throw new Error("Method not implemented.");
    }
    delete(id: String): any {
        throw new Error("Method not implemented.");
    }

    getByEmailAndPassword(email: String, password: String): Promise<Discente> {
        const sub: Subject = new Subject();
        return new Promise((resolve, reject) => {
            db.get(`Select * from students where email = ? and password = ?`, [email, password], (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    if (row == undefined) {
                        reject(err);
                    } else {
                        let discente: Discente = new Discente();
                        discente = row;
                        let discentes: Discente[] = [];
                        discentes.push(discente)
                        sub.readByStudents(discentes)
                        resolve(discente);
                    }
                }
            });
        });
    }
}