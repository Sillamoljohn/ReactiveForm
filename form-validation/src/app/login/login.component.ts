import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  getLoginDetail: any;

  constructor(private fb: FormBuilder,
    private router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() {
    return this.loginForm.controls;
  }

  login() {
    this.submitted = true;
    let loginDetails = [];
    this.getLoginDetail = this.loginForm.value;
    loginDetails = JSON.parse(localStorage.getItem('setLoginDetails')) &&
      JSON.parse(localStorage.getItem('setLoginDetails')).map((item: any) => {
        if (
          this.getLoginDetail.email === item.email &&
          this.getLoginDetail.password === item.password
        ) {
          alert('login');
          this.router.navigateByUrl('signup');

        } else {
          alert('no');
        }
      });
    // console.log(this.getLoginDetail.email);

  }
}
