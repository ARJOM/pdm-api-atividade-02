class SubjectService{
    createSubject(nova:Subject):boolean{
        return true;
    }

    readAllSubject():[Subject]{
        return [new Subject()];
    }

    readSubjectById(id:number):Subject{
        return new Subject();
    }

    updateSubject(subjectAtt:Subject):boolean{
        return true;
    }

    deleteSubject(id:number):boolean{
        return true;
    }
}