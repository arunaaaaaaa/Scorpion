import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  username:any=localStorage.getItem('username');
  to:any=localStorage.getItem('token');
constructor()
{}
ngOnInit(){
}
logout(){}

}
