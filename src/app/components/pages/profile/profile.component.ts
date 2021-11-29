import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { ObservableService } from 'src/app/services/observable.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  href: string
  constructor(
    private router: Router
  ) {
    this.href = this.router.url;
    ObservableService.webUrl.next(this.href)
  }

  ngOnInit(): void {
  }
  // filter(event) {
  //   var target = event.target
  //   if ($(target).hasClass('filter-btn')) {
  //     $(target).toggleClass("filter-bg")
  //   }
  //   else {
  //     return
  //   }
  // }
  // see more or less buttons
  // see more or less buttons
  // btnVal1 = "See More";
  // btnVal2 = "See More";
  // status2: boolean = false;
  // status3: boolean = false;
  // seelessclickEvent(event: any) {

  //   this.status2 = !this.status2;
  //   if (this.status2 == false) {
  //     this.btnVal1 = "See More"
  //   }
  //   else {
  //     this.btnVal1 = "See Less"
  //   }
  // }
  // seeless2clickEvent(event: any) {

  //   this.status3 = !this.status3;
  //   if (this.status3 == false) {
  //     this.btnVal2 = "See More"
  //   }
  //   else {
  //     this.btnVal2 = "See Less"
  //   }
  // }




  // see more or less buttons
  btnVal1 = "See More";
  btnVal2 = "See More";
  status2: boolean = false;
  status3: boolean = false;
  seelessclickEvent(event: any) {

    this.status2 = !this.status2;
    if (this.status2 == false) {
      this.btnVal1 = "See Less"
    }
    else {
      this.btnVal1 = "See More"
    }
  }
  seeless2clickEvent(event: any) {

    this.status3 = !this.status3;
    if (this.status3 == false) {
      this.btnVal2 = "See Less"
    }
    else {
      this.btnVal2 = "See More"
    }
  }
  public isCollapsed = false;
  public isCollapsed2 = false;


  // property slider
  slides = [
    {
      img: "../../../../assets/1x/slider-img1.png",
    },
    {
      img: "../../../../assets/1x/slider-img2.png",
    },
    {
      img: "../../../../assets/1x/slider-img3.png",
    },
    {
      img: "../../../../assets/1x/slider-img1.png",
    },
    {
      img: "../../../../assets/1x/slider-img2.png",
    },
    {
      img: "../../../../assets/1x/slider-img3.png",
    },
  ];
  slideConfig = {
    "autoplay": true, "autoplaySpeed": 1500, "slidesToShow": 1, "slidesToScroll": 1, prevArrow: '<button class="slide-arrow prev-arrow" > <i class="fa fa-chevron-left fa-lg"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-chevron-right fa-lg"></i></button>',
    'responsive': [
      {
        'breakpoint': 769,
        'settings': {
          'slidesToShow': 2
        }
      },
      {
        'breakpoint': 415,
        'settings': {
          'slidesToShow': 1
        }

      }
    ]
  };
  // ag map
  lat: number = 36.084621;
  lng: number = -96.921387;

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

}
