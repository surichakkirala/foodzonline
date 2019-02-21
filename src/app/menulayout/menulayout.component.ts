import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menulayout',
  templateUrl: './menulayout.component.html',
  styleUrls: ['./menulayout.component.css']
})
export class MenulayoutComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }
  @Input()
  title : String;

}
