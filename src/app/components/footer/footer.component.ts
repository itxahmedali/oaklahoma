import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentTime = new Date()
  Currentdate = this.currentTime.getFullYear()

  constructor() { }

  ngOnInit(): void {
  }

}
