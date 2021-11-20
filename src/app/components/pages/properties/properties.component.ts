import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
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
  // google map
  locations: []
  constructor() { }

  ngOnInit(): void {
  }

}
