import { Answer } from "../Model/answer";

export default class AnswerService{
    createAnswer(nova:Answer):Answer{
        return nova.create();
    }

    readAllAnswer():Answer[]{
        return [new Answer()];
    }

    readAnswerById(id:String):Promise<any>{
        return new Answer().readById(id);
    }

    readAnswerByDiscenteId(id:String):Promise<any>{
        return new Answer().readByDiscenteId(id);
    }

    updateAnswer(id:String,value:number):Promise<any>{
        return new Answer().update(id,value);
    }

    deleteAnswer(id:String):Answer{
        return new Answer();
    }

    darNota(id_discente:String,value:String):Answer{
        return new Answer();
    }

    calcularNPS(id_survey:String):Promise<any>{
        return new Answer().calculateNps(id_survey);
    }
}