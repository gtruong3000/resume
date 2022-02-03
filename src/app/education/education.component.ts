import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  @Input()
  education!: any;
  
  constructor() { }

  ngOnInit(): void {
  }


}
