import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-compo',
  templateUrl: './test-compo.component.html',
  styleUrls: ['./test-compo.component.scss']
})
export class TestCompoComponent implements OnInit {

  constructor() { }
  public isCollapsed1 = true;
  public setCollapse = true;


  ngOnInit(): void {
  }
}
