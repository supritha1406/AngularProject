//import { CoursesService } from './courses.service';
// Step-1 : Creating a component.
import { Component } from '@angular/core'; // decorator
//import { componentFactoryName } from '@angular/compiler';

/*@Component( {
        selector: 'courses',             // selector is a property. // <courses> "course"
        template: `
        <h2>{{ title}}</h2>
        <ul>
            <li *ngFor= "let courses of courses">
            {{ course }}
            </li>
        </ul>
        `   
    })
export class CoursesComponent {
 title = "List of Courses";
 courses;

 constructor(service: CoursesService) {
     //let service = new CoursesService();
     this.courses = service.getCourses();
 }
}*/

// Step-2 : Registering the created component in app module. 
// Finally using the created component in the template called "app.component.html"

// Property Binding & String Interpolation:
@Component({
    selector: 'courses',
    template: `
    <h2>{{ title }}</h2>              
    <h2 [textContent]="title"></h2>

    <img src="{{imageUrl}}"/>
    <img [src]="title" />
    `
   // template: `<button class="btn btn-primary">Save</button>`
  // template: `<button (click)="onSave()">Save</button>`
})//  Interpolation is the double curly braces syntax used to display data. It can be used in div's, headings, paragraphs, spans or where ever you want to render text.

export class CoursesComponent {
    title = " List of courses";
    imageUrl = "http://lorempixel.com/400/200";
   // onSave(){
       // console.log('')
    }


// Behind the scene when angular compiles our templates, it translate interpolation into property binding. In property binding we bind the property of the dom element like src in ( <img src="{{imageUrl}}"/> ) with filled property in our component. 
 
// srting interpolation -->  <img src="{{imageUrl}}"/>   (Interpolation works well adding dynamic values between headings.)
// OR square bracket syntax -->   <img [src]="title" />
// property binding for square bracket syntax is -->  <h2 [textContent]="title"></h2>
    