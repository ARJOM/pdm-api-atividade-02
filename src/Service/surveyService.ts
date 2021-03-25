import { allowedNodeEnvironmentFlags } from "process";
import { Survey } from "../Model/survey";

export default class SurveyService{
    createSurvey(nova:Survey):Survey{
        return nova.create();
    }

    readAllSurvey():Survey[]{
        return [new Survey()];
    }

    readSurveyById(id:String):Survey{
        return new Survey();
    }

    updateSurvey(surveyAtt:Survey):Survey{
        return new Survey();
    }

    deleteSurvey(id:String):Survey{
        return new Survey();
    }

    sendEmail(email:String,id_survey:number):boolean{
        return true;
    }
}