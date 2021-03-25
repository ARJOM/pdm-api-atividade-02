import { Subject }  from '../Model/subject';

export default class SubjectService{
    createSubject(nova:Subject):Subject{
        return nova.create();
    }

    readAllSubject():Subject[]{
        return [new Subject()];
    }

    readSubjectById(id:String):Subject{
        return new Subject().readById(id);
    }

    updateSubject(subjectAtt:Subject):Subject{
        return new Subject();
    }

    deleteSubject(id:String):Subject{
        return new Subject();
    }
}