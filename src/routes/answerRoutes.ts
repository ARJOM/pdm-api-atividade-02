import { Request, Response, Router } from 'express';
import { Answer } from '../Model/answer';
import AnswerService from '../Service/answersService';

const routes = Router();

routes.post('/answers', (req: Request, res: Response) => {
    const answersService = new AnswerService();
    const { id_discente, id_survey, value } = req.body;
    const answer = new Answer(id_survey, id_discente, value);
    res.json(answersService.createAnswer(answer));
});

routes.get('/answers/:value', (req: Request, res: Response) => {
    const answersService = new AnswerService();
    const params = req.params;
    console.log(params);
    res.json("Tudo bom?");
    /*const nota = req.params.nota.split('=');
    const result: Promise<any> = answersService.readAnswerByDiscenteId(id[1]);
    result.then((reso: Promise<any>) => {
        res.json(answersService.updateAnswer(id[1], Number.parseInt(nota[1])));
    }).catch((rej) => {
        res.status(400).json({ error: 'Pesquisa does not exist for this discente' });
    })*/
});

routes.get('/nps/:survey_id', (req: Request, res: Response) => {
    const answersService = new AnswerService();
    const id = req.params.survey_id.split('=');
    const result: Promise<any> = answersService.calcularNPS(id[1]);
    result.then((reso: Promise<any>) => {
        res.json("nps = " + reso + " %");
    }).catch((rej) => {
        res.status(400).json({ error: 'Survey does not exist' });
    })
});

export default routes;
