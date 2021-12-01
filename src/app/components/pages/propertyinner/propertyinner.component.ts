import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObservableService } from 'src/app/services/observable.service';
@Component({
  selector: 'app-propertyinner',
  templateUrl: './propertyinner.component.html',
  styleUrls: ['./propertyinner.component.scss']
})
export class PropertyinnerComponent implements OnInit {


  href: string
  constructor(
    private router: Router
  ) {
    this.href = this.router.url;
    ObservableService.webUrl.next(this.href)
  }

  ngOnInit(): void {
  }
  // property slider
  slides = [
    {
      img: "assets/1x/sliderimg1.png",
    },
    {
      img: "assets/1x/sliderimg2.png",
    },
    {
      img: "assets/1x/sliderimg3.png",
    },
    {
      img: "assets/1x/sliderimg1.png",
    },
    {
      img: "assets/1x/sliderimg2.png",
    },
    {
      img: "assets/1x/sliderimg3.png",
    },
  ];
  slideConfig = {
    "autoplay": true, "autoplaySpeed": 1500, "slidesToShow": 3, "slidesToScroll": 1, prevArrow: '<button class="slide-arrow prev-arrow" > <i class="fa fa-chevron-left fa-lg"></i></button>',
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

}
