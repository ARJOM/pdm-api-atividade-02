import { Discente } from "../Model/discente";
import PasswordEncrypts from '../utils/passwordEncrypt';

export default class DiscenteService{
    createDiscente(novo:Discente):Discente{
        return novo.create();
    }

    readAllDiscente():Promise<any>{
        return new Discente().readAll();
    }

    readDiscenteById(id:String):Promise<any>{
        return new Discente().readById(id);
    }

    login(email: String, senha: String): Promise<Discente>{
        const discente = new Discente()
        const password = PasswordEncrypts.passwordEncrypt(senha)
        return discente.getByEmailAndPassword(email, password)
            .then(result => {
                return result
            })
            .catch(error => {
                throw console.error();
                
            })
    }

    updateDiscente(discenteAtt:Discente):Discente{
        return new Discente();
    }

    deleteDiscente(id:String):Discente{
        return new Discente();
    }

}