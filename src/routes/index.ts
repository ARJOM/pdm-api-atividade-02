import { Router } from 'express';
import AnswerRoutes from './answerRoutes';
import DiscenteRoutes from './discenteRoutes';
import SubjectRoutes from './subjectRoutes';
import SurveyRoutes from './surveyRoutes';


const routes = Router();

routes.use(AnswerRoutes);
routes.use(DiscenteRoutes);
routes.use(SubjectRoutes);
routes.use(SurveyRoutes);

export default routes;