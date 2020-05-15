import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee [] = [
  {
    id: 1,
    name: 'Mark',
    gender: 'Male',
    email: 'markr@gmail.com',
    phonenumber: 345678,
    contactPreference: 'Email',
    dateOfBirth: new Date('10/09/2019'),
    department: 'IT',
    isActive: true,
    photoPath: 'assets/images/avatar1.png'
  },
  {
    id: 2,
    name: 'Jane',
    gender: 'Female',
    phonenumber: 958908,
    contactPreference: 'Phone',
    dateOfBirth: new Date('10/09/1789'),
    department: 'Marketing',
    isActive: true,
    photoPath: 'assets/images/avatar3.png'
  },
{
  id: 3,
  name: 'JTreyvis',
  gender: 'Male',
  email: 'teryr@gmail.com',
  contactPreference: 'Fax',
  dateOfBirth: new Date('10/11/1999'),
  department: 'HR',
  isActive: false,
  photoPath: 'assets/images/avatar4.png'
},
  ];
  constructor() { }

  ngOnInit() {
  }

}
