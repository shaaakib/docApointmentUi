import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 useObj:any = {
   username: '',
   password: ''
 }

 router = inject(Router);

 onLogin(){
  if(this.useObj.username == 'admin' && this.useObj.password == '123456'){
    this.router.navigateByUrl("/appointment-list");
  }else{
    alert('Invalid credentials');
  }
  
 }

}
