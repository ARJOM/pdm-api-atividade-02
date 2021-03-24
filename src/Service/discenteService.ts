class DiscenteService{
    createDiscente(novo:Discente):boolean{
        return true;
    }

    readAllDiscente():[Discente]{
        return [new Discente()];
    }

    readDiscenteById(id:number):Discente{
        return new Discente();
    }

    updateDiscente(discenteAtt:Discente):boolean{
        return true;
    }

    deleteDiscente(id:number):boolean{
        return true;
    }

}