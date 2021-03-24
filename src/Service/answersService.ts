class AnswerService{
    createAnswer(nova:Answer):boolean{
        return true;
    }

    readAllAnswer():[Answer]{
        return [new Answer()];
    }

    readAnswerById(id:number):Answer{
        return new Answer();
    }

    updateAnswer(answerAtt:Answer):boolean{
        return true;
    }

    deleteAnswer(id:number):boolean{
        return true;
    }

    darNota(id_discente:number,value:number):boolean{
        return true;
    }

    calcularNPS(id_survey:number):number{
        return 1;
    }
}