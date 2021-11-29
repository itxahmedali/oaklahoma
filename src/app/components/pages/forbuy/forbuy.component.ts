import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObservableService } from 'src/app/services/observable.service';
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
    ObservableService.webUrl.next(this.href)
  }


}


