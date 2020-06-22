import { Component } from '@angular/core';
import {Student} from './student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myStudents:Student[];
  courseName:any;
  constructor(){
    this.myStudents = [];
    
  }

  ngOnInit(){
    this.myStudents =[
{'sid':101,'sname':'abhi','phone':12345,'course':'Java','feepaid':15000,'doj':new Date(),'currencyCode':'INR','dateFormat':'dd-MM-yyyy'}, 
 
{'sid':102,'sname':'srinivas','phone':76865,'course':'Python','feepaid':15000,'doj':new Date(),'currencyCode':'EUR','dateFormat':'shortDate'}, 
 
{'sid':103,'sname':'Manish','phone':10987,'course':'Angular','feepaid':15000,'doj':new Date(),'currencyCode':'INR','dateFormat':'longDate'}, 
 
{'sid':104,'sname':'srinivas','phone':209678,'course':'Java','feepaid':15000,'doj':new Date(),'currencyCode':'USD','dateFormat':'fullDate'}, 
 
{'sid':105,'sname':'kumar','phone':30986,'course':'Python','feepaid':10000,'doj':new Date(),'currencyCode':'EUR','dateFormat':'dd/MM/yyyy'}, 
 
{'sid':106,'sname':'srinivas','phone':2098,'course':'MongoDB','feepaid':15000,'doj':new Date(),'currencyCode':'AUD','dateFormat':'dd/MM/yy'}, 
 
{'sid':107,'sname':'abhishek','phone':23456,'course':'Angular','feepaid':15000,'doj':new Date(),'currencyCode':'INR','dateFormat':'fullDate'}, 
 
{'sid':108,'sname':'Dande','phone':456789,'course':'MongoDB','feepaid':15000,'doj':new Date(),'currencyCode':'USD','dateFormat':'dd-MM-yy HH:mm:ss'}, 
 
{'sid':109,'sname':'Dande','phone':29871,'course':'Java','feepaid':15000,'doj':new Date(),'currencyCode':'USD','dateFormat':'dd-MM-yyyy HH:mm'}, 
 
{'sid':110,'sname':'srinivas','phone':12345,'course':'Python','feepaid':10000,'doj':new Date(),'currencyCode':'EUR','dateFormat':'dd/MM/yyyy'}, 
    ]
  }
}

