import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObservableService } from 'src/app/services/observable.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public href: string = "";
  pageName = [
    'forbuy',
    'forrent',
    'aboutus',
    'articles',
    'login',
    'signup',
    'contactus',
    'properties',
    'propertyinner',
    'articles-inner',
    'forgot',
    'terms',
    'profile',
    'reset',
    'testComp',
  ]
  pageNameCon: boolean = false;


  constructor(private router: Router) { }

  ngOnInit() {
    this.href = this.router.url;
    ObservableService.webUrl.subscribe(value => {
      console.log(value)
      this.urlCheck(value)
    })
  }

  urlCheck(r) {
    console.log(r)
    let url = r.split("/")[1]
    // if (url.includes(this.pageName)) {
    //   this.pageNameCon = true
    // }
    this.pageName.map((val) => {
      if (val == url) {
        this.pageNameCon = true;
      }
    })
  }
}
