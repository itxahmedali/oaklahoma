import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  href: string;
  constructor(
    private router: Router,
    private cd: ChangeDetectorRef,
  ) {

  }

  ngOnInit(): void {
    this.href = this.router.url;
    ObservableService.webUrl.next(this.href)
    this.cd.detectChanges();
  }
  // property slider
  slides = [
    {
      img: "../../../../assets/1x/slider-img1.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2 ,
      bathroom: 2,
      sqft: 1360,
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img2.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2 ,
      bathroom: 2,
      sqft: 1360,
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img3.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2 ,
      bathroom: 2,
      sqft: 1360,
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img1.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2 ,
      bathroom: 2,
      sqft: 1360,
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img2.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2 ,
      bathroom: 2,
      sqft: 1360,
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img3.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2 ,
      bathroom: 2,
      sqft: 1360,
      price: 750000
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



  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }
  propertysell:number = 0;
  propertyrent:number = 0;
  propertysold:number = 0;
  propertysellstop:any = setInterval(()=>{
    this.propertysell++;
    if(this.propertysell == 558){
      clearInterval(this.propertysellstop)
    }

  },10)
  propertyrentstop:any = setInterval(()=>{
    this.propertyrent++;
    if(this.propertyrent == 412){
      clearInterval(this.propertyrentstop)
    }
  },10)
  propertysoldstop:any = setInterval(()=>{
    this.propertysold++;
    if(this.propertysold == 112){
      clearInterval(this.propertysoldstop)
    }
  },10)
}
