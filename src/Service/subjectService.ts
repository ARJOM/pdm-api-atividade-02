import { Subject }  from '../Model/subject';

class SubjectService{
    createSubject(nova:Subject):Subject{
        return new Subject();
    }

    readAllSubject():Subject[]{
        return [new Subject()];
    }

    readSubjectById(id:number):Subject{
        return new Subject();
    }

    updateSubject(subjectAtt:Subject):Subject{
        return new Subject();
    }

    deleteSubject(id:number):Subject{
        return new Subject();
    }
}