import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // property slider
  slides = [
    {
      img: "../../../../assets/1x/slider-img1.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2 + " bd,",
      bathroom: 2 + " bath,",
      sqft: 1360 + " sqft",
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img2.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2 + " bd,",
      bathroom: 2 + " bath,",
      sqft: 1360 + " sqft",
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img3.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2 + " bd,",
      bathroom: 2 + " bath,",
      sqft: 1360 + " sqft",
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img1.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2 + " bd,",
      bathroom: 2 + " bath,",
      sqft: 1360 + " sqft",
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img2.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2 + " bd,",
      bathroom: 2 + " bath,",
      sqft: 1360 + " sqft",
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img3.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2 + " bd,",
      bathroom: 2 + " bath,",
      sqft: 1360 + " sqft",
      price: 750000
    },
  ];
  slideConfig = {
    "slidesToShow": 3, "slidesToScroll": 1, prevArrow: '<button class="slide-arrow prev-arrow" > <i class="fa fa-chevron-left fa-lg"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-chevron-right fa-lg"></i></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
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

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

}
