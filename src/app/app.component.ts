import { Component } from '@angular/core';
import { StudentManagementService } from './student-management.service';
import { Student} from './model/student';
import { STUDENTS} from './student-management.service';
import { Input} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Lab1 Students';
  studs: Student[];
  studentsi = STUDENTS;

  selectedStudent: Student;


  onSelect(student: Student): void {
    this.selectedStudent = student;
  }
}
