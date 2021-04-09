import { Request, Response, Router } from 'express';
import SurveyService from '../Service/surveyService';
import { Survey } from '../Model/survey';

const routes = Router();

routes.post('/surveys', (req: Request, res: Response) => {
    const surveyService = new SurveyService();
    const { title, description} = req.body;
    const survey = new Survey( title, description);
    res.json(surveyService.createSurvey(survey));
});

routes.post('/sendEmail', (req: Request, res: Response) => {
    const surveyService = new SurveyService();
    const { email, id_survey} = req.body;
    const result:Promise<any> = surveyService.sendEmail(email, id_survey);
    result.then((reso:Promise<any>)=>{
        res.status(200).json("Email enviado com sucesso!");
    }).catch((rej)=>{
        res.status(400).json({ error: rej });
    })
});

export default routes;