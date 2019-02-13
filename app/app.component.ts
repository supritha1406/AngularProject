 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ["HTML", "CSS", "JAVASCRIPT"]; 
  newItem = "";
   pushItem = function() {
     if(this.newItem != "") {
       this.items.push(this.newItem);
       this.newItem = "";
     }
   }
  removeItem = function(index) { // index is the position of list items. 
    this.items.splice(index, 1); // 1 indicates to remove "1" item from the give "index"
  }
}
