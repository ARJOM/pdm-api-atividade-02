import { Answer } from "../Model/answer";

class AnswerService{
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

    deleteAnswer(id:number):Answer{
        return new Answer();
    }

    darNota(id_discente:number,value:number):Answer{
        return new Answer();
    }

    calcularNPS(id_survey:number):number{
        return 1;
    }
}