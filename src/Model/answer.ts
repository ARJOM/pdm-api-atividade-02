import { db } from '../app';
import Crud from './crud';
import { v4 as uuidv4 } from 'uuid';

export class Answer{
    id?: String;
    id_survey?: String;
    id_discente?: String;
    value?: number;
    created_at?: String;

    constructor(id_survey?:String,id_discente?:String,value?:number,created_at?:String){
        this.id = uuidv4();
        this.id_discente = id_discente;
        this.id_survey = id_survey;
        this.value = value;
        if(created_at != null){
            this.created_at = created_at;
        }else{
            this.created_at = new Date().toString();
        }
    }
    create(): any {
        db.run(`INSERT INTO surveys_students(id,user_id,survey_id,value,created_at) VALUES(?,?,?,?,?)`, [this.id, this.id_discente, this.id_survey, this.value, this.created_at], function (err) {
            if (err) {
                return err.message;
            }
        });
        return this;
    }
    readById(id: String):any {
        throw new Error("Method not implemented.");
    }
    readByDiscenteId(id: String):Promise<any> {
        let ans: Answer = new Answer();
        return new Promise((resolve, reject) => {
            db.get(`Select * from surveys_students where user_id = ?`,id, (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    if(row == undefined){
                        reject(err);
                    }
                    ans = row;
                    resolve(ans);
                }
            });
        });
    }
    readAll(): any {
        throw new Error("Method not implemented.");
    }
    update(id:String,value:number): any {
        this.value = value;
        db.run(`UPDATE surveys_students SET value = ? WHERE user_id = ?`, [value,id], function (err) {
            if (err) {
                return err.message;
            }
        });
        return this;
    }
    delete(id: String): any {
        throw new Error("Method not implemented.");
    }
    calculateNps(survey_id: String): Promise<any> {
        return new Promise((resolve, reject) => {
            db.all(`Select value from surveys_students where survey_id = ?`,[survey_id], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    let nps:number = 0;
                    let detratores:number = 0;
                    let promotores:number = 0;
                    if(rows.length<1){
                        reject(err);
                    }
                    rows.forEach((row) => {
                        if(row.value>=9 && row.value<=10){
                            promotores++;
                        }else if(row.value>=0 && row.value<=6){
                            detratores++;
                        };
                    });
                    nps = ((promotores*100)/(promotores + detratores)) - ((detratores*100)/(promotores + detratores));
                    resolve(nps);
                }
            });
        });
    }

}