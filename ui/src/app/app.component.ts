import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui';
  constructor(private http: HttpClient) { }

 public test(){
  var qest="";

  this.http.get('http://localhost:3000/').subscribe(data => {
    qest = data.toString();
    console.log(qest);
}) 
  }
}
