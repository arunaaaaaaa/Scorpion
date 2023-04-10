import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  lengthpass:Boolean=false;
  numbercheck:Boolean=false;
  lettercheck:Boolean=false;
  capscheck:Boolean=false;
  Specialcharcheck:Boolean=false;
  title = 'textUI'
 signinToogle!: Boolean; 
 username : string ="";
Pass: string ="";
ConfirmPass:string="";
show: boolean= false;
signup:boolean=false;
constructor(private http: HttpClient ) { }
  ngOnInit(){
  }

 public login(){
  this.signinToogle=true;
  console.log("working")
 }
public submit(){
  this.lengthpass=false;
  this.numbercheck=false;
  this.lettercheck=false;
  this.capscheck=false;
  this.Specialcharcheck=false;
  let valcheck=this.validationcheck(this.Pass);
if(this.lengthpass==false&& this.lettercheck==false&&this.numbercheck==false&&this.capscheck==false&&this.Specialcharcheck==false&&this.Pass!=null&&this.Pass!=''){
  console.log("user name is " + this.username)
const body = { username: this.username, password:this.Pass };
this.http.post('http://localhost:3000/login', body).subscribe((data) => {
  console.log(data);
});
this.clear();
}
}
public validationcheck(password:String){
if(!password.match(".*\\d.*"))
{
  this.numbercheck=true ;
}
 if(password.length<=8){
  this.lengthpass=true;
}
 if(!password.match(".*[a-z].*"))
     {
        this.lettercheck=true;
       
     }
      if(!password.match(".*[A-Z].*")){
      this.capscheck=true;
      
    }
     if(!password.match(".*[^a-zA-Z0-9 ].*"))
      {
        this.Specialcharcheck=true;
        
      }


}
clear(){
this.username ="";
this.Pass = "";
}
public Signin(){
  this.lengthpass=false;
  this.numbercheck=false;
  this.lettercheck=false;
  this.capscheck=false;
  this.Specialcharcheck=false;
  if(this.ConfirmPass==this.Pass){
  console.log("user name is " + this.username)
  const body = { name: this.username, password:this.Pass };
const headers = new Headers;
  headers.append('Access-Control-Allow-Origin', '*');

  // this.http.post('localhost:3000/signin', body).subscribe((data) => {
  //   console.log(data);
  // });
  
  this.clear();
}
}
}
