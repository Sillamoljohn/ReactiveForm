import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUPComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  // onSubmit() {
  //     this.submitted = true;
  //     let registerDetails = [];
  //     registerDetails.push(this.registerForm.value);

  //     if (this.registerForm.invalid) {
  //         return;
  //     }

  //    localStorage.setItem('setLoginDetails', JSON.stringify(registerDetails));
  //     let newData = [];
  //     newData.push(JSON.parse(localStorage.getItem('setLoginDetails')));
  //     console.log(newData);
  // }

  onSubmit() {
    this.submitted = true;
    let registerDetails = [];
    JSON.parse(localStorage.getItem('setLoginDetails')) &&
      JSON.parse(localStorage.getItem('setLoginDetails')).map(item => registerDetails.push(item));
    console.log(registerDetails);
    registerDetails.push(this.registerForm.value);
    localStorage.setItem('setLoginDetails', JSON.stringify(registerDetails));
    this.router.navigateByUrl('login');
  }
}
