import { Request, Response, Router } from 'express';
import { Discente } from '../Model/discente';
import DiscenteService from '../Service/discenteService';
import jwt from 'jsonwebtoken';
import VerifyJwt from '../utils/verifyAuth';
import { SECRET }  from '../utils/secret';
import PasswordEncrypts from '../utils/passwordEncrypt';

const routes = Router();

routes.post('/discentes', (req: Request, res: Response) => {
    const discenteService = new DiscenteService();
    const { name, email, password ,subjects} = req.body;
    const passwordEncrypted = PasswordEncrypts.passwordEncrypt(password)
    const discente = new Discente(name, email,subjects, undefined, passwordEncrypted);
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

routes.get('/discentes/:id', VerifyJwt.verifyJWT, (req: Request, res: Response) => {
    const discenteService = new DiscenteService();
    const id = req.params.id.split('=');
    const result:Promise<any> = discenteService.readDiscenteById(id[1]);
    result.then((reso:Promise<any>)=>{
        res.json(reso);
    }).catch((rej)=>{
        res.status(400).json({ error: 'Student does not exist' });
    })
});

routes.post('/login', (req: Request, res: Response) => {
    const discenteService = new DiscenteService();
    const { email, password} = req.body;
    discenteService.login(email, password)
    .then(r => {
        if (!!r){ //verifica se não é nulo
            const token = jwt.sign({id: r.id}, SECRET, {
                expiresIn: 3600000 // expires in 1 hour
            });
            return res.json({auth: true, token: token});
        } else{
            res.status(400).json({ error: 'Email ou senha incorretas' })
        }
    })
    .catch(error => {
        res.status(400).json({ error: 'Email ou senha incorretas' })
    })
})

export default routes;