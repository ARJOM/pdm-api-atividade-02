import { Request, Response, Router } from 'express';
import { Subject } from '../Model/subject';
import SubjectService from '../Service/subjectService';

const routes = Router();


routes.post('/subjects', (req: Request, res: Response) => {
    const subjectService = new SubjectService();
    // const { workload, name } = req.body;
    // const subject = new Subject(name, workload);
    // res.json(subjectService.createSubject(subject));
});

routes.get('/subjects', (req: Request, res: Response) => {
    // const subjectService = new SubjectService();
    // res.json(subjectService.readAllSubject())
})

export default routes;