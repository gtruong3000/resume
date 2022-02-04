import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'scroll-fab',
  templateUrl: './scroll-fab.component.html',
  styleUrls: ['./scroll-fab.component.scss']
})
export class ScrollFabComponent implements OnInit {
  
  isActive = false;
  foldPercentage = 30;

  constructor() { }

  ngOnInit(): void {
    // window.addEventListener('scroll', this.handleScroll, true)
  }

  @HostListener('window:scroll')
  handleScroll(event:Event) {
    this.isActive = window.scrollY > window.screen.height * (30 / 100);
  }

  handleClick() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  
}
