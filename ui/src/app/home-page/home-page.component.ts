import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { take } from 'rxjs';
interface Articles{
  author?:String;
  content?:String;
  description?:String;
  publishedAt?:String;
  title?:String;
  url?:String;
  urlToImage?:String;
}
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  username:any=localStorage.getItem('username');
  to:any=localStorage.getItem('token');
  newsData:any;
  articledetails?:Articles[];
constructor(private httpClient:HttpClient)
{}
ngOnInit(){
  this.fetchData();
}
logout(){}
fetchData(){
  this.httpClient.get('http://localhost:3000/home').pipe(take(1)).subscribe((data) => {
    console.log(data);
    const res=Object.values(data)
    console.log(res[0])
    this.articledetails=res[0]
  });
  }
}
