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

        let comments = [

            {id:1, userID:"Alexandra", message:"Seria bueno si la oficina de Recursos Humanos automatizara el proceso atraves del CTI para que sea algo mecanico."},
            {id:2, userID:"Abdiela", message: "Cobrando una vez al mes no se puede, mucho menos cuando nuestro contrato está por quincena."},
            {id:3, userID:"Andrea", message: "Cansada de que la internet siempre se caiga, hasta en el trabajo"},
            {id:4, userID:"Roberta", message: "Estoy totalmente de acuerdo, esto es ridiculo!!!!!"},
            {id:5, userID:"Royina", message: "A-a-a-a-a-alomejor si no dependieran tanto de una sola persona para crear el proceso, los estudiantes por jornal cobrarian a tiempo"}

        ];

        return {shouts, comments};
    }

}