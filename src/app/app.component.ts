// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { concat } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cookieValue = 'cookie';
  cookiecheck: boolean;
  cookiedelete;
  cookievalue :{};

  constructor( private cookieService: CookieService ) { }

  ngOnInit(): void {
    this.cookieService.set( 'Test', 'HelloWorld' );
    this.cookieService.set( 'name', 'salman' );
    this.cookieService.set( 'computer', 'lenovo' );
    this.cookievalue = this.cookieService.getAll();
    console.log("Set all cookies",this.cookievalue);

    this.cookiecheck = this.cookieService.check('Test');
    console.log("True if cookie name with Test is available",this.cookiecheck);
    this.cookieValue = this.cookieService.get('name');
    console.log(this.cookieValue);
    this.cookiedelete = this.cookieService.delete('computer');
    this.cookievalue = this.cookieService.getAll();
    console.log(this.cookievalue);
    this.cookiedelete = this.cookieService.deleteAll();
    this.cookievalue = this.cookieService.getAll();
    console.log("This is deleted cookies",this.cookievalue);

  }
}