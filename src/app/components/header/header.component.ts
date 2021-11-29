import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { ObservableService } from 'src/app/services/observable.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public href: string = "";
  pageName = [
    'propertyinner',
    'articles-inner',
    'forgot',
    'terms',
    'profile',
    'reset',
    'propertiesrent'
  ]
  pageNameCon: boolean = false;


  constructor(
    private router: Router,
    private cd: ChangeDetectorRef,
    ) { }

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
    // this.pageName.map((val) => {
    //   if (val == url) {
    //     this.pageNameCon = true;
    //     this.cd.detectChanges();
    //     console.log(this.pageNameCon)
    //   }
    // })

    for(var i = 0; i < this.pageName.length; i++){
      if(this.pageName[i] == url){
        this.pageNameCon = true;
        break
      }else{
        this.pageNameCon = false;
      }
    }
    this.cd.detectChanges();
  }

  public isVisited = false;
  sidenav(event) {
    this.isVisited = !this.isVisited;
    if (this.isVisited == true) {
      $(".sidenav-btn").addClass('open')
      $('.sider').css('display', 'block')
      setTimeout(() => {
        $('.sider').css('opacity', '1');
        $('.sideNave').css('left', '0')
      })
    } else {
      $(".sidenav-btn").removeClass('open')
      $('.sideNave').css('left', '-300px')
      setTimeout(() => {
        $('.sider').css('opacity', '0');
      }, 300)
      setTimeout(() => {
        $('.sider').css('display', 'none')
      }, 600)
    }
  }

}
