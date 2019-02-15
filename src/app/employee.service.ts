import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees()
  {
    return [
    {"id":1, "name":"Dinesh", "age":22},
    {"id":2, "name":"kumaar", "age":23},
    {"id":3, "name":"Raghav", "age":24},
    {"id":4, "name":"Prasath", "age":25}
    ]
  }
    
}
