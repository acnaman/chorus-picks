import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

const links = [
  {
    path: 'pickup',
    title: 'ピックアップ'
  }
];

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  navLinks = links;
  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);

  constructor() { }

  ngOnInit() {
  }

}
