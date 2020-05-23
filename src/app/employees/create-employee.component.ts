import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Department} from '../models/department.model';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  dateOfBirth: Date = new Date(2020, 2, 2);
  datePickerConfig: Partial<BsDatepickerConfig>;
  previewPhoto: false;
  departments: Department [] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'IT'},
    {id: 3, name: 'Payroll'},
    {id: 4, name: 'Marketing'}
  ];
  constructor() {
    this.datePickerConfig = Object.assign({}, {
      containerClass : 'theme-dark-blue',
      showWeekNumbers: false,
      minDate: new Date(2018, 0, 1),
      maxDate: new Date(2020, 11, 1),
      dateInputFormat: 'DD/MM/YYYY'
    });
  }


  ngOnInit() {
  }

 /*togglePhotoPreview() {
   this.previewPhoto = !this.previewPhoto;
  }*/


saveEmployee(empForm: NgForm): void {

  console.log(empForm.value);
}
}
