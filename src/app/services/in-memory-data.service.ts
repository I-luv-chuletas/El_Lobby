import {InMemoryDbService} from 'angular-in-memory-web-api'


export class InMemoryDataService {

    createDb(){

        let shouts = [

            {id:1, title:"Primera Prueba", rating:0, commentSectionId:1, message:"Todos aqui somos unos motherfucking wierdos." }

        ] 

        return {shouts};
    }

}
