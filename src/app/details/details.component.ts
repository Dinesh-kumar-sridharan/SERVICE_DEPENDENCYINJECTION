import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public Employees = [ ];

  constructor( private _EmployeeService: EmployeeService) { }

  ngOnInit() {
    this.Employees = this._EmployeeService.getEmployees();
  }

}
