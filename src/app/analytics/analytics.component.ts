import {Component} from '@angular/core';
import {Departamento} from '../deps';


@Component({
    selector: 'analytics',
    template: require('./analytics.component.html'),
    styles: [require('./analytics.component.css')]
})

export class AnalyticsComponent {

  dept: Departamento[];
  i: number = 0; 

  departamentos: string[] = [
  'Admisiones',
  'Asistencia Economica',
  'Archivo General',
  'Biblioteca',
  'Calidad de Vida',
  'Centro de Investigacion y Creacion',
  'Centro para el Desarrollo de Competencias Linguisticas y de Informatica',
  'Centro Tecnologias de Informacion',
  'Centro Virtual de Carreras',
  'Consejeria y Servicios Psicologicos',
  'Decanato Academico',
  'Decanato Administrativo',
  'Decanato Estudiantil',
  'Deportes',
  'Educacion Continua y Estudios Profesionales (DECEP)',
  'Exalumnos',
  'Finanzas',
  'ISMuL',
  'Pagaduria',
  'Planificacion y Estudios Institucionales',
  'Presupuesto',
  'Procuraduria Estudiantil',
  'Programa Calidad de Vida',
  'Programa de Estudios de Honor',
  'Programa de Intercambio Estudiantil',
  'Programa de Servicios Educativos (PSE)',
  'Proyecto Comunidades de Aprendizaje',
  'Recaudaciones',
  'Rectoria',
  'Recursos Externos',
  'Recursos Fisicos',
  'Recursos Humanos',
  'Registraduria',
  'Oficina de Servicios a Estudiantes con Impedimentos - OSEI',
  'Salud y Seguridad',
  'Seguridad y Vigilancia',
  'Servicios Medicos'
  ];

  insertValue(departamentos: string[], dept: Departamento[], i: number): Departamento[] {
    for (var item of departamentos){
      dept[i].name = item;
      i++
    }
    return dept;
  }
}
 