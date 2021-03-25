import { Answer } from "../Model/answer";

export default class AnswerService{
    createAnswer(nova:Answer):Answer{
        return new Answer();
    }

    readAllAnswer():Answer[]{
        return [new Answer()];
    }

    readAnswerById(id:number):Answer{
        return new Answer();
    }

    updateAnswer(answerAtt:Answer):Answer{
        return new Answer();
    }

    deleteAnswer(id:String):Answer{
        return new Answer();
    }

    darNota(id_discente:String,value:String):Answer{
        return new Answer();
    }

    calcularNPS(id_survey:String):number{
        return 1;
    }
}