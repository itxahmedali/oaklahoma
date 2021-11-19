import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  minValue: any;

  min_value = [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
  ];
  maxValue: any;
  max_value = [
      { id: 1, value: 50 },
      { id: 2, value: 60 },
      { id: 3, value: 70 },
      { id: 4, value: 80 },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
