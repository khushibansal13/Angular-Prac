import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  ngOnInit(): void {
      initFlowbite();
  }

  router = inject(Router);

  onLogoff() {
    localStorage.removeItem("angular19Token");
    localStorage.removeItem("angular19User");
    localStorage.removeItem("angular19TokenData");
    this.router.navigateByUrl("login");
  }

}
