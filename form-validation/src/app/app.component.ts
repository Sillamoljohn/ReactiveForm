import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error("Method not implemented.");
  }

  constructor(
    private router: Router
  ) { }
  ngOnInit() {

  }

  logout() {
    localStorage.removeItem('setLoginDetails');
    this.router.navigate(['login']);
  }

}
