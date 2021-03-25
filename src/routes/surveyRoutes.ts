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

export default routes;