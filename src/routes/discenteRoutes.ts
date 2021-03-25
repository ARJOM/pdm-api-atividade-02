import { Request, Response, Router } from 'express';
import { Discente } from '../Model/discente';
import DiscenteService from '../Service/discenteService';

const routes = Router();

routes.post('/discentes', (req: Request, res: Response) => {
    const discenteService = new DiscenteService();
    const { name, email,subjects} = req.body;
    const discente = new Discente(name, email,subjects);
    res.json(discenteService.createDiscente(discente));
});

export default routes;