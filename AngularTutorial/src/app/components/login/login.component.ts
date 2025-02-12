import { HttpClient } from '@angular/common/http';
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

  loginObj: any = {
    username: '',
    password: ''
  }

  apiLoginObj: any = {
    "EmailId": "",
    "Password": ""
  }

  router = inject(Router);
  http = inject(HttpClient);


// Hard code login method:
  // onLogin() {
  //   if(this.loginObj.username == "admin" && this.loginObj.password == "1122"){
  //     this.router.navigateByUrl("admin")
  //   }else {
  //     alert("Invalid Credentials!");
  //   }
  // }

  onLogin() {
    this.http.post("https://projectapi.gerasim.in/api/UserApp/login", this.apiLoginObj)
    .subscribe((res:any) => {
      localStorage.setItem("angular19User", res.data.userId)
      this.router.navigateByUrl("admin")
    },error => {
      alert("Invalid Credentials!");
    }
  )
  }

}
