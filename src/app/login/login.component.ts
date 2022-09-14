import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public username: string | undefined;
  public password: string | undefined;
  public retUrl: string | null = 'home';

  constructor(private authService: AuthGuardService, private router: Router) {}

  ngOnInit(): void {}

  onFormSubmit(loginForm: any) {
    this.authService
      .login(loginForm.value.username, loginForm.value.password)
      .subscribe({
        next: (data: any) => {
          // console.log(data);
          // console.log(data['token']);
          localStorage.setItem('token', data['token']);
          alert('Login Successful!');
        },
        error: (err) => {
          alert('Login Unsuccessful. Try again');
        },
      });
  }
}
