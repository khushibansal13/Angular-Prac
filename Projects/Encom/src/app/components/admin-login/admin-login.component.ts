import { Component, inject } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-admin-login',
  imports: [FormsModule, NgIf],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {

  loginObj: any = {
    username: '',
    password: ''
  }

  constructor(private api : ApiService, private router: Router) { }


  onLogin() {
    this.api.login(this.loginObj).subscribe((res) => {
      localStorage.setItem("angular19User", res.id)
      localStorage.setItem("angular19Token", res.accessToken)
      localStorage.setItem("angular19RefreshToken" , res.refreshToken)
      localStorage.setItem("angular19TokenData" , JSON.stringify(res))
      alert(`Welcome, ${res.firstName}! You have successfully logged in.`);

      this.router.navigateByUrl("product")
    });
  }

}
