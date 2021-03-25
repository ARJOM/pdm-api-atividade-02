import { Discente } from "../Model/discente";

export default class DiscenteService{
    createDiscente(novo:Discente):Discente{
        return novo.create();
    }

    readAllDiscente():Discente[]{
        return [new Discente()];
    }

    readDiscenteById(id:String):Discente{
        return new Discente();
    }

    updateDiscente(discenteAtt:Discente):Discente{
        return new Discente();
    }

    deleteDiscente(id:String):Discente{
        return new Discente();
    }

}