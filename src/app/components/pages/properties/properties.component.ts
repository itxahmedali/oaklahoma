import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']

})
export class PropertiesComponent implements OnInit {
  // more filters or fewer filters buttons
  btnVal = "More Filters";
  status: boolean = true;
  clickEvent(event:any) {
    this.status = !this.status;
    if(this.status == false){
      this.btnVal = "Fewer Filters"
    }
    else{
      this.btnVal = "More Filters"
    }
  }
  // see more or less buttons
  btnVal1 = "See More";
  btnVal2 = "See More";
  status2: boolean = false;
  status3: boolean = false;
  seelessclickEvent(event:any) {

    this.status2 = !this.status2;
    if(this.status2 == false){
      this.btnVal1 = "See More"
    }
    else{
      this.btnVal1 = "See Less"
    }
  }
  seeless2clickEvent(event:any) {

    this.status3 = !this.status3;
    if(this.status3 == false){
      this.btnVal2= "See More"
    }
    else{
      this.btnVal2 = "See Less"
    }
  }
  public isCollapsed = true;
  public isCollapsed2 = true;


  minValue: any;

  min_value = [
    { id: 1, value: "$1k" },
    { id: 2, value: "$1k" },
    { id: 3, value: "$1k" },
    { id: 4, value: "$1k" },
  ];
  maxValue: any;
  max_value = [
    { id: 1, value: "$1k" },
    { id: 2, value: "$1k" },
    { id: 3, value: "$1k" },
    { id: 4, value: "$1k" },
  ];
  properties = [
    {
      img: "../../../../assets/1x/slider-img1.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2,
      bathroom: 2,
      sqft: 1360,
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img2.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2,
      bathroom: 2,
      sqft: 1360,
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img3.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2,
      bathroom: 2,
      sqft: 1360,
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img1.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2,
      bathroom: 2,
      sqft: 1360,
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img2.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2,
      bathroom: 2,
      sqft: 1360,
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img3.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2,
      bathroom: 2,
      sqft: 1360,
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img3.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2,
      bathroom: 2,
      sqft: 1360,
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img3.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2,
      bathroom: 2,
      sqft: 1360,
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img3.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2,
      bathroom: 2,
      sqft: 1360,
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img3.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2,
      bathroom: 2,
      sqft: 1360,
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img3.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2,
      bathroom: 2,
      sqft: 1360,
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img3.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2,
      bathroom: 2,
      sqft: 1360,
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img3.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2,
      bathroom: 2,
      sqft: 1360,
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img3.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2,
      bathroom: 2,
      sqft: 1360,
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img3.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2,
      bathroom: 2,
      sqft: 1360,
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img3.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2,
      bathroom: 2,
      sqft: 1360,
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img3.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2,
      bathroom: 2,
      sqft: 1360,
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img3.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2,
      bathroom: 2,
      sqft: 1360,
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img3.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2,
      bathroom: 2,
      sqft: 1360,
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img3.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2,
      bathroom: 2,
      sqft: 1360,
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img3.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2,
      bathroom: 2,
      sqft: 1360,
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img3.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2,
      bathroom: 2,
      sqft: 1360,
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img3.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2,
      bathroom: 2,
      sqft: 1360,
      price: 750000
    },
    {
      img: "../../../../assets/1x/slider-img3.png",
      address: "770 West Senna Ave. Spiro, OK 74959",
      bedroom: 2,
      bathroom: 2,
      sqft: 1360,
      price: 750000
    },
  ];
  // pagination
  p: number = 1;
  totalRecords: any = 10;
  collection: any[];
  // // google map
  lat: number = 36.084621;
  lng: number = -96.921387;

  // cities
  cities = [
    {
      name: "Oklahoma",
      price: 5000
    },
    {
      name: "Edmond",
      price: 5000
    },
    {
      name: "Tulsa",
      price: 5000
    },
    {
      name: "Norman",
      price: 5000
    },
  ]
  bathrommItem:any=[
    {qty:0}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
