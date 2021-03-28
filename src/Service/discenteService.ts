import { Discente } from "../Model/discente";

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

    updateDiscente(discenteAtt:Discente):Discente{
        return new Discente();
    }

    deleteDiscente(id:String):Discente{
        return new Discente();
    }

}