import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.css']
})
export class AppButtonComponent implements OnInit {
  @Input() btnStyleClass: any;
  @Input() btnText: any;

  constructor() { }

  ngOnInit(): void {
  }

}
