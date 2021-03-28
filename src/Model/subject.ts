import { db } from '../app';
import Crud from './crud';
import { v4 as uuidv4 } from 'uuid';
import { Discente } from './discente';

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
    readAll(): any {
        throw new Error("Method not implemented.");
    }
    update(): any {
        throw new Error("Method not implemented.");
    }
    delete(id: String): any {
        throw new Error("Method not implemented.");
    }
    readByStudents(discentes: Discente[]): Promise<any> {
        return new Promise((resolve, reject) => {
            db.all(`Select stsubs.user_id as stdid, subs.id as id,subs.name as name,subs.workload as workload,subs.created_at as created_at
                    from subjects as subs inner join students_subjects as stsubs
                    on subs.id = stsubs.subject_id`, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    for (let index = 0; index < discentes.length; index++) {
                        discentes[index].subjects = [];
                        rows.forEach((row) => {
                            if (discentes[index].id == row.stdid) {
                                let sub: Subject = new Subject();
                                sub.id = row.id;
                                sub.name = row.name;
                                sub.workload = row.workload;
                                sub.created_at = row.created_at;
                                discentes[index].subjects?.push(sub);
                                console.log(discentes[index].subjects);
                            }
                        });          
                    }
                    resolve(discentes);
                }
            })
        })
    }
}