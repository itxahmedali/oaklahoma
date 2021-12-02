import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { event } from 'jquery';
import { ObservableService } from 'src/app/services/observable.service';
@Component({
  selector: 'app-propertyinner',
  templateUrl: './propertyinner.component.html',
  styleUrls: ['./propertyinner.component.scss'],
})
export class PropertyinnerComponent implements OnInit {
  // scroll to div and adding background behind buttons div using vps
  href: string;
  constructor(private router: Router, private vps: ViewportScroller) {
    this.href = this.router.url;
    ObservableService.webUrl.next(this.href);
  }
  scrolltoDiv(id, $event) {
    $('.cusotmBlack_btn').removeClass('active');
    $event.target.classList.add('active');

    this.vps.scrollToAnchor(id);
    // if (
    //   id == 'overview' ||
    //   id == 'description' ||
    //   id == 'propertyDetails' ||
    //   id == 'school'
    // ) {
    //   $('.topButtonsSection').css({
    //     position: 'fixed',
    //     top: '0',
    //     left: '0',
    //     right: '0',
    //     'z-index': '10',
    //     'background-color': '#000000da',
    //     'backdrop-filter': 'blur(5px)',
    //     '-webkit-box-shadow': ' 0px 17px 22px 1px rgba(0,0,0,0.56)',
    //     '-moz-box-shadow': '0px 17px 22px 1px rgba(0,0,0,0.56)',
    //     'box-shadow': '0px 17px 22px 1px rgba(0,0,0,0.56)',
    //   });
    // }
  }
  // scroll to top
  currentPosition = window.pageYOffset;
  // @HostListener('window:scroll', ['$event.target'])
  // scroll(e) {
  //   let scroll = e.scrollingElement.scrollTop;
  //   if (scroll > this.currentPosition) {
  //     if (scroll > 100) {
  //       $('.topButtonsSection').css({
  //         position: 'fixed',
  //         top: '0',
  //         left: '0',
  //         right: '0',
  //         'z-index': '10',
  //       });
  //       setTimeout(() => {
  //         $(".topButtonsSection").css({
  //           'background-color': '#000000da',
  //         'backdrop-filter': 'blur(5px)',
  //         '-webkit-box-shadow': ' 0px 17px 22px 1px rgba(0,0,0,0.56)',
  //         '-moz-box-shadow': '0px 17px 22px 1px rgba(0,0,0,0.56)',
  //         'box-shadow': '0px 17px 22px 1px rgba(0,0,0,0.56)',
  //         })

  //       }, 100);
  //     }
  //   } else {
  //     if (scroll < 100) {
  //       $('.topButtonsSection').css({
  //         'background-color': 'transparent',
  //           'backdrop-filter': 'blur(0)',
  //           '-webkit-box-shadow': ' 0px 17px 22px 1px transparent',
  //           '-moz-box-shadow': '0px 17px 22px 1px transparent',
  //           'box-shadow': '0px 17px 22px 1px transparent',

  //       });
  //       setTimeout(() => {

  //         $(".topButtonsSection").css({
  //           position: 'static',

  //         })


  //       }, 1000);
  //     }
  //   }
  //   this.currentPosition = scroll;
  // }


  ngOnInit(): void {}
  // property slider
  slides = [
    {
      img: 'assets/1x/sliderimg1.png',
    },
    {
      img: 'assets/1x/sliderimg2.png',
    },
    {
      img: 'assets/1x/sliderimg3.png',
    },
    {
      img: 'assets/1x/sliderimg4.png',
    },
    {
      img: 'assets/1x/sliderimg5.png',
    },
    {
      img: 'assets/1x/sliderimg6.png',
    },
    {
      img: 'assets/1x/sliderimg6.png',
    },
    {
      img: 'assets/1x/sliderimg6.png',
    },
  ];
  slideConfig = {
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 6,
    slidesToScroll: 1,
    loop:true,
    prevArrow:
      '<button class="slide-arrow prev-arrow" > <i class="fa fa-chevron-left fa-lg"></i></button>',
    nextArrow:
      '<button class="slide-arrow next-arrow"><i class="fa fa-chevron-right fa-lg"></i></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
   // preview image
   imgSrc = 'https://images.contentstack.io/v3/assets/bltf589e66bcaecd79c/bltef0b39eb529be37a/5f2ab77c0269427af13883d0/black-windows-on-modern-home.jpg'
   imgPreivew(i){
    console.log(i)
    // $(".preivewImg").attr("src", this.slides[i].img)
  }
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
}
