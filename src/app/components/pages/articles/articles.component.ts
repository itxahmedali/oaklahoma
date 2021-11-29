import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObservableService } from 'src/app/services/observable.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {


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
