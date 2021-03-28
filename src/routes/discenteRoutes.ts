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

routes.get('/discentes', (req: Request, res: Response) => {
    const discenteService = new DiscenteService();
    const result:Promise<any> = discenteService.readAllDiscente();
    result.then((reso:Promise<any>)=>{
        res.json(reso);
    }).catch((rej)=>{
        res.json(rej);
    })
});

routes.get('/discentes/:id', (req: Request, res: Response) => {
    const discenteService = new DiscenteService();
    const id = req.params.id.split('=');
    const result:Promise<any> = discenteService.readDiscenteById(id[1]);
    result.then((reso:Promise<any>)=>{
        res.json(reso);
    }).catch((rej)=>{
        res.json(rej);
    })
});

export default routes;