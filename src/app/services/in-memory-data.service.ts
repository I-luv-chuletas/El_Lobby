import {InMemoryDbService} from 'angular-in-memory-web-api'


export class InMemoryDataService implements InMemoryDbService {

    createDb(){

        let shouts = [

            {id:1, rating:6, userID:"Alexander Rivera", commentSectionId:1, title:"Cobros tardios departe de @Recursos Humanos", 
            message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
            {id:2, rating:9, userID:"Abdiel Moran", commentSectionId:2, title:"Falta de mantenimiento en laboratorio ac-232", message:"adfasdfadsfasdfadsfadfasfasdfadf"},
            {id:3, rating:0, userID:"Andre Walker", commentSectionId:3, title:"Humedad en conductos de aires", message:"adfasdfadsfasdfadsfadfasfasdfadf"},
            {id:4, rating:1, userID:"Roberto Rosa", commentSectionId:4, title:"Falta de transparencia de parte del Rector", message:"adfasdfadsfasdfadsfadfasfasdfadf"},
            {id:5, rating:15, userID:"Roy Brow", commentSectionId:4, title:"Internet no funciona!!!!!", message:"adfasdfadsfasdfadsfadfasfasdfadf"}

        ]; 

        return {shouts};
    }

}
