import { Injectable } from '@angular/core';
import { Student} from './model/student';

export const STUDENTS: Student[] = [
  { ime: 'Stole' , prezime : 'Popov' , indeks : 151161 , nasoka : 'KNI'},
  { ime: 'Stole' , prezime : 'Popov' , indeks : 151165, nasoka : 'KNI'},
  { ime: 'Stole' , prezime : 'Popov' , indeks : 151165, nasoka : 'KNI'},
  { ime: 'Stole' , prezime : 'Popov' , indeks : 151165, nasoka : 'KNI'},
  ];




@Injectable()
export class StudentManagementService {

  constructor() { }

  get4Students(): Student[] {
    return STUDENTS;
  }

}
