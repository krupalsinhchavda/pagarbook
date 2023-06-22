import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-details-attedancefilter',
  templateUrl: './details-attedancefilter.component.html',
  styleUrls: ['./details-attedancefilter.component.css']
})
export class DetailsAttedancefilterComponent implements OnInit {
  panelOpenState = false;
  toppings = this._formBuilder.group({
    NoDepartment: false,
    Frontend: false,
    mushroom: false,
  });
  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit(): void {
  }

}
