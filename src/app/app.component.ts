import { Component, HostListener } from '@angular/core';
import * as $ from 'jquery';
import { NgwWowService } from 'ngx-wow';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  title = 'oklahoma';
  pageName = [
    'home',
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

  public href: string = "";

  // constructor(private router: Router) { }
  constructor(
    private wowService: NgwWowService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
    ) {
    this.wowService.init();
  }

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.router.url);
    this.urlCheck(this.href);

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      const rt = this.getChild(this.activatedRoute);
      rt.data.subscribe(data => {
        console.log(data);
        this.titleService.setTitle(data.title)});
    });
  }

  getChild(activatedRoute: ActivatedRoute) {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }

  }

  // adding bg behind navbar
  currentPosition = window.pageYOffset;
  @HostListener('window:scroll', ['$event.target']) // for window scroll events
  scroll(e) {
    let scroll = e.scrollingElement.scrollTop;
    if (scroll > this.currentPosition) {
      if (scroll > 100) {
        $('.navbar').css({ 'background-color': "#000000da", "backdrop-filter": "blur(5px)", "-webkit-box-shadow": ' 0px 17px 22px 1px rgba(0,0,0,0.56)', '-moz-box-shadow': "0px 17px 22px 1px rgba(0,0,0,0.56)", "box-shadow": "0px 17px 22px 1px rgba(0,0,0,0.56)" })
      }
    } else {
      if (scroll < 100) {
        $('.navbar').css({ 'background-color': "transparent", "backdrop-filter": "blur(0)", "-webkit-box-shadow": ' 0px 17px 22px 1px transparent', '-moz-box-shadow': "0px 17px 22px 1px transparent", "box-shadow": "0px 17px 22px 1px transparent" })
      }
    }
    this.currentPosition = scroll;
  }

  urlCheck(r) {
    let url = r.split("/")[1]
    if (url.includes(this.pageName)) {
      this.pageNameCon = true
    }
  }
  onActivate(event) {
    window.scroll(0,0);
}
}
