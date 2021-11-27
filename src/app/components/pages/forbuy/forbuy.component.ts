import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forbuy',
  templateUrl: './forbuy.component.html',
  styleUrls: ['./forbuy.component.scss']
})
export class ForbuyComponent implements OnInit {

  public href: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.router.url);
  }

}
