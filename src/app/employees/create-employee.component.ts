import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Department} from '../models/department.model';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto: false;
  departments: Department [] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'IT'},
    {id: 3, name: 'Payroll'},
    {id: 4, name: 'Marketing'}
  ];
  constructor() { }


  ngOnInit() {
  }

 /*togglePhotoPreview() {
   this.previewPhoto = !this.previewPhoto;
  }*/


saveEmployee(empForm: NgForm): void {

  console.log(empForm.value);
}
}
