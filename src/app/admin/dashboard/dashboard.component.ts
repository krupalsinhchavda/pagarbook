import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  panelOpenState = false;
  isloader = false;
  date = new FormControl(moment());

  constructor(private _formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {

  }
}
function moment(): any {
}