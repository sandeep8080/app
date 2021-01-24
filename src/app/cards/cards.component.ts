import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
@Input() desc : any;
@Input() title : any;
@Input() imgScr: any;
  constructor() { }

  ngOnInit(): void {
  }

}
