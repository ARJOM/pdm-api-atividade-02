import express, { Express, json, Request, Response } from 'express';
import Cors from 'cors';
import sqlite3, { Database } from 'sqlite3';
import { readFile } from 'fs';
import Routes from './routes';

interface AppConfig {
    PORT?: number
}

export let db: Database;
class App {

    public main: Express;

    constructor({ PORT }: AppConfig){
        this.main = express();
        this.config();
        this.connectDatabase();
        this.routes();
        this.listen(PORT ? PORT : 3333);
    }

    private listen(PORT: number): void {
        this.main.listen(PORT, () => {
            console.log(`Server is open in port ${PORT}`);
        });
    }

    private connectDatabase(): void{
        db = new sqlite3.Database('DB.db', (err:any) => {
            if (err) {
              console.log('Could not connect to database', err)
            } else {
              console.log('Connected to database')
            }
          })

        db.run(`CREATE TABLE IF NOT EXISTS subjects(
            id TEXT,
            name TEXT,
            workload TEXT,
            created_at DATE,
            PRIMARY KEY(id)
        );
        
        CREATE TABLE IF NOT EXISTS students(
            id TEXT,
            name TEXT,
            email TEXT,
            created_at DATE,
            PRIMARY KEY(id)
        );
        
        CREATE TABLE IF NOT EXISTS surveys(
            id TEXT,
            title TEXT,
            description TEXT,
            created_at DATE,
            PRIMARY KEY(id)
        );
        
        CREATE TABLE IF NOT EXISTS students_subjects(
            id TEXT,
            user_id TEXT,
            subject_id TEXT,
            created_at DATE,
            PRIMARY KEY(id),
            FOREIGN KEY(user_id) REFERENCES students(id),
            FOREIGN KEY(subject_id) REFERENCES subjects(id)
        );
        
        CREATE TABLE IF NOT EXISTS surveys_students(
            id TEXT,
            user_id TEXT,
            survey_id TEXT,
            value TEXT,
            created_at DATE,
            PRIMARY KEY(id),
            FOREIGN KEY(user_id) REFERENCES students(id),
            FOREIGN KEY(survey_id) REFERENCES surveys(id)
        );
        `);
    }

    private routes(): void{
        this.main.get('/api/v1', (req: Request, res: Response) => {
            return res.status(200).json({
                name: 'pdm-api-atividade-02',
                version: '1.0.0',
            });
        });
        this.main.use('/api/v1', Routes);
    }

    private config(): void{
        this.main.use(json());
        this.main.use(Cors());
    }

}

export default App;
