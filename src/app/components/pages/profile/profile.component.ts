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
  href: string;
  opo = [1,2,3,4,5,6]
  constructor(
    private router: Router
  ) {
    this.href = this.router.url;
    ObservableService.webUrl.next(this.href)
  }

  ngOnInit(): void {
  }


  // see more or less buttons
  btnVal1 = "See More";
  btnVal2 = "See More";
  status2: boolean = false;
  status3: boolean = false;
  seelessclickEvent(event: any) {

    this.status2 = !this.status2;
    if (this.status2 == false) {
      this.btnVal1 = "See More"
    }
    else {
      this.btnVal1 = "See Less"
    }
  }
  seeless2clickEvent(event: any) {

    this.status3 = !this.status3;
    if (this.status3 == false) {
      this.btnVal2 = "See More"
    }
    else {
      this.btnVal2 = "See Less"
    }
  }
  public isCollapsed = true;
  public isCollapsed2 = true;


  // property slider
  slides = [
    {
      img: "https://images.unsplash.com/photo-1549517045-bc93de075e53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80",
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
  propertysell:number = 0;
  propertyrent:number = 0;
  propertysold:number = 0;
  propertysellstop:any = setInterval(()=>{
    this.propertysell++;
    if(this.propertysell == 55){
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

  bannerimage="assets/1x/profileImage.png"
  //FileUpload
  readUrl(event: any, param) {
    if (event.target.files.length === 0)
      return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return} else {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_event) => {
        this[param] = reader.result;
        return;
      };
    }
  }
}
