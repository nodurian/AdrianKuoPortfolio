import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollToElement($element): void {
    console.log($element);
    $element.scrollToElement({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
