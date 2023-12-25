import { UniversitiesRepository } from "../DAL/UniversitiesRepository";

export default class AService {

    constructor(private universitiesRepository:UniversitiesRepository ){
    }

    aMethod(){
        return this.universitiesRepository.getUniversities('Greece');
    }
}
