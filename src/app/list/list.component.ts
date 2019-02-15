import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public Employees = [ ];

  constructor( private _EmployeeService: EmployeeService) { }

  ngOnInit() {
    this.Employees = this._EmployeeService.getEmployees();
  }

}
