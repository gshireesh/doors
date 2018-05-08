import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.scss']
})
export class DoorsComponent implements OnInit {

  @Input() opened: boolean;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.opened = true;
    }, 1000);
  }

}
