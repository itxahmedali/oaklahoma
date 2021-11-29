import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObservableService } from 'src/app/services/observable.service';
@Component({
  selector: 'app-forrent',
  templateUrl: './forrent.component.html',
  styleUrls: ['./forrent.component.scss']
})
export class ForrentComponent implements OnInit {


  href: string
  constructor(
    private router: Router
  ) {
    this.href = this.router.url;
    ObservableService.webUrl.next(this.href)
  }

  ngOnInit(): void {
  }

}
