import { Component, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  title = 'oklahoma';

  // adding bg behind navbar
  currentPosition = window.pageYOffset;
  @HostListener('window:scroll', ['$event.target']) // for window scroll events
  scroll(e) {
    let scroll = e.scrollingElement.scrollTop;
    if (scroll > this.currentPosition) {
      if(scroll> 200){
        $('.navbar').css({'background-color': "#000000da", "backdrop-filter":"blur(5px)","-webkit-box-shadow":' 0px 17px 22px 1px rgba(0,0,0,0.56)','-moz-box-shadow':"0px 17px 22px 1px rgba(0,0,0,0.56)","box-shadow":"0px 17px 22px 1px rgba(0,0,0,0.56)"})
      }
    } else {
      if(scroll< 200){
      $('.navbar').css({'background-color': "transparent", "backdrop-filter":"blur(0)","-webkit-box-shadow":' 0px 17px 22px 1px transparent','-moz-box-shadow':"0px 17px 22px 1px transparent","box-shadow":"0px 17px 22px 1px transparent"})
    }
  }
    this.currentPosition = scroll;
  }
}
