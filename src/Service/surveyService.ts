import { Survey } from "../Model/survey";

class SurveyService{
    createSurvey(nova:Survey):Survey{
        return new Survey();
    }

    readAllSurvey():Survey[]{
        return [new Survey()];
    }

    readSurveyById(id:number):Survey{
        return new Survey();
    }

    updateSurvey(surveyAtt:Survey):Survey{
        return new Survey();
    }

    deleteSurvey(id:number):Survey{
        return new Survey();
    }

    sendEmail(email:String,id_survey:number):boolean{
        return true;
    }
}