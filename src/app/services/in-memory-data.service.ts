import {InMemoryDbService} from 'angular-in-memory-web-api'


export class InMemoryDataService implements InMemoryDbService {

    createDb(){

        let shouts = [

            {id:1, rating:0, userID:1, commentSectionId:1, title:"Primera Prueba", message:"Todos aqui somos unos motherfucking wierdos."},
            {id:2, rating:0, userID:1, commentSectionId:2, title:"LOREM IPSUM", message:"adfasdfadsfasdfadsfadfasfasdfadf"},
            {id:3, rating:0, userID:1, commentSectionId:3, title:"LOREM IPSUM", message:"adfasdfadsfasdfadsfadfasfasdfadf"},
            {id:4, rating:0, userID:1, commentSectionId:4, title:"LOREM IPSUM", message:"adfasdfadsfasdfadsfadfasfasdfadf"}

        ]; 

        return {shouts};
    }

}
