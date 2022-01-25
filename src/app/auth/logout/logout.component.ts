import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'todoapp-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.logout().subscribe((response) => {
      if(response.success) {
        sessionStorage.removeItem('user');
        this.router.navigate(['/auth/signin']);
      }
    });
  }

  ngOnInit(): void {
  }
}
