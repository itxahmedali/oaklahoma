import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

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




}
