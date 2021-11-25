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
  isCollapsed = false;
}
