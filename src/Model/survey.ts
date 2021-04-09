import Crud from './crud';
import { v4 as uuidv4 } from 'uuid';
import { Discente } from './discente';
import { db } from '../app';
import { Answer } from './answer';
import DotEnv from 'dotenv';
import nodemailer, { Transporter } from 'nodemailer';

DotEnv.config();

const { SMTP_EMAIL } = process.env.SMTP_EMAIL as any;
const { NAME_EMAIL } = process.env.NAME_EMAIL as any;
const { USERNAME_EMAIL } = process.env.USERNAME_EMAIL as any;
const { PASSWORD_EMAIL } = process.env.PASSWORD_EMAIL as any;
const { PORT_EMAIL } = process.env.PORT_EMAIL as any;

export class Survey implements Crud {
    id?: String;
    title?: String;
    description?: String;
    created_at?: String;
    private client: Transporter;

    constructor(title?: String, description?: String, created_at?: String) {
        this.id = uuidv4();
        this.title = title;
        this.description = description;
        if (created_at != null) {
            this.created_at = created_at;
        } else {
            this.created_at = new Date().toString();
        }
        const transporter = nodemailer.createTransport({
            host: SMTP_EMAIL,
            port: PORT_EMAIL,
            secure: false, // true for 465, false for other ports
            ignoreTLS: true,
            auth: {
                user: USERNAME_EMAIL, // generated ethereal user
                pass: PASSWORD_EMAIL, // generated ethereal password
            },
            logger: true,
        });
        this.client = transporter;
    }
    create(): any {
        db.run(`INSERT INTO surveys(id,title,description,created_at) VALUES(?,?,?,?)`, [this.id, this.title, this.description, this.created_at], function (err) {
            if (err) {
                throw new Error(err.message);
            }
        });
        return this;
    }
    readById(id: String): Promise<any> {
        const ans: Answer = new Answer();
        return new Promise((resolve, reject) => {
            db.get(`Select * from surveys where id = ?`, id, (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    if (row == undefined) {
                        reject("Survey does not exist");
                    } else {
                        let survey: Survey = new Survey();
                        survey = row;
                        resolve(survey);
                    }
                }
            });
        });
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
    sendEmail(email: String, id_survey: String): Promise<any> {
        let sur: Survey = new Survey();
        let dis: Discente = new Discente();
        let ans: Answer = new Answer();
        const resultSur = sur.readById(id_survey);
        const resultDis = dis.readByEmail(email);
        let error = "";
        resultSur.then((reso) => {
            sur = reso;
            ans.id_survey = sur.id;
        }).catch((rej) => {
            error = rej;
        });
        resultDis.then((reso) => {
            dis = reso;
            ans.id_discente = dis.id;
            ans.create();
        }).catch((rej) => {
            error = rej;
        });
        return new Promise((resolve, reject) => {
            this.client.sendMail({
                from: USERNAME_EMAIL, // sender address
                to: email.toString(), // list of receivers
                subject: sur.title?.toString(), // Subject line
                text: sur.description?.toString(), // plain text body
                html: `
                    <div class="answers">
                        <a class="value" href="http://localhost:3333/answers/1?su={{`+ ans.id + `}}">1</a>
                        <a class="value" href="http://localhost:3333/answers/2?su={{`+ ans.id + `}}">2</a>
                        <a class="value" href="http://localhost:3333/answers/3?su={{`+ ans.id + `}}">3</a>
                        <a class="value" href="http://localhost:3333/answers/4?su={{`+ ans.id + `}}">4</a>
                        <a class="value" href="http://localhost:3333/answers/5?su={{`+ ans.id + `}}">5</a>
                        <a class="value" href="http://localhost:3333/answers/6?su={{`+ ans.id + `}}">6</a>
                        <a class="value" href="http://localhost:3333/answers/7?su={{`+ ans.id + `}}">7</a>
                        <a class="value" href="http://localhost:3333/answers/8?su={{`+ ans.id + `}}">8</a>
                        <a class="value" href="http://localhost:3333/answers/9?su={{`+ ans.id + `}}">9</a>
                        <a class="value" href="http://localhost:3333/answers/10?su={{`+ ans.id + `}}">10</a>
                    </div>
                `, // html body
            }, (err, info) => {
                if (err != null) {
                    reject(err);
                } else {
                    resolve("Email enviado com sucesso!");
                }
            });
        });
    }
}