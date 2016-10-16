import {InMemoryDbService} from 'angular-in-memory-web-api'


export class InMemoryDataService implements InMemoryDbService {

    createDb(){

        let shouts = [

            {id:1, rating:6, userID:1, commentSectionId:1, title:"Primera Prueba", message:"Todos aqui somos unos motherfucking wierdos."},
            {id:2, rating:9, userID:2, commentSectionId:2, title:"Segunda Prueba", message:"adfasdfadsfasdfadsfadfasfasdfadf"},
            {id:3, rating:0, userID:3, commentSectionId:3, title:"Tercer Prueba", message:"adfasdfadsfasdfadsfadfasfasdfadf"},
            {id:4, rating:1, userID:4, commentSectionId:4, title:"Cuarta Prueba", message:"adfasdfadsfasdfadsfadfasfasdfadf"}

        ]; 

        return {shouts};
    }

}
