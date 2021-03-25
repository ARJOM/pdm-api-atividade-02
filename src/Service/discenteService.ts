import { Discente } from "../Model/discente";

export default class DiscenteService{
    createDiscente(novo:Discente):Discente{
        return new Discente();
    }

    readAllDiscente():Discente[]{
        return [new Discente()];
    }

    readDiscenteById(id:number):Discente{
        return new Discente();
    }

    updateDiscente(discenteAtt:Discente):Discente{
        return new Discente();
    }

    deleteDiscente(id:number):Discente{
        return new Discente();
    }

}