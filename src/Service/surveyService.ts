class SurveyService{
    createSurvey(nova:Survey):boolean{
        return true;
    }

    readAllSurvey():[Survey]{
        return [new Survey()];
    }

    readSurveyById(id:number):Survey{
        return new Survey();
    }

    updateSurvey(surveyAtt:Survey):boolean{
        return true;
    }

    deleteSurvey(id:number):boolean{
        return true;
    }

    sendEmail(email:String,id_survey:number):boolean{
        return true;
    }
}