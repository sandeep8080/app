import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css']
})
export class RangeComponent implements OnInit {
  @Input() label: any;
  @Input() min: any;
  @Input() max: any;
  rangeValue: any = 0;
  percent:any=0;

  onRangeValueChange(event: any) {
    const value = event.target.value;
    this.rangeValue = value;

    // setiing the gradient for slider Input
    this.percent = (value - this.min) / (this.max-this.min) * 100;
  }



  


  constructor() { }


  ngOnInit(): void {
  }

}
