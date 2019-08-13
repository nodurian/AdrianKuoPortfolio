import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cols: number;
  outerRowHeight: string;
  innerRowHeight: string;

  constructor() { }

  ngOnInit() {
    this.cols = (window.innerWidth <= 768) ? 1 : 2;
    this.outerRowHeight = (window.innerWidth <= 768) ? "100px" : "2:0.8";
    this.innerRowHeight = (window.innerWidth <= 768) ? "35px" : "1:1";
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.cols = (event.target.innerWidth <= 768) ? 1 : 2;
    this.outerRowHeight = (window.innerWidth <= 768) ? "100px" : "2:0.8";
    this.innerRowHeight = (window.innerWidth <= 768) ? "35px" : "1:1";
  }
}
