import {InMemoryDbService} from 'angular-in-memory-web-api'


export class InMemoryDataService implements InMemoryDbService {

    createDb(){

        let shouts = [

            {id:1, rating:6, userID:1, commentSectionId:1, title:"Quejas de Walker", 
            message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
            {id:2, rating:9, userID:2, commentSectionId:2, title:"Ale es un mamabicho", message:"adfasdfadsfasdfadsfadfasfasdfadf"},
            {id:3, rating:0, userID:3, commentSectionId:3, title:"Pero abdiel se la traga", message:"adfasdfadsfasdfadsfadfasfasdfadf"},
            {id:4, rating:1, userID:4, commentSectionId:4, title:"Y lo jalan por pelo", message:"adfasdfadsfasdfadsfadfasfasdfadf"},
            {id:5, rating:15, userID:6, commentSectionId:4, title:"Vaci Vaci (pero tienes cara e pu)", message:"adfasdfadsfasdfadsfadfasfasdfadf"}

        ]; 

        return {shouts};
    }

}