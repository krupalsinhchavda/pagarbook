import { Component, OnInit, OnDestroy } from "@angular/core";
import { timer } from "rxjs";
import { Router } from "@angular/router";


@Component({
  selector: 'app-signed-out',
  templateUrl: './signed-out.component.html',
  styleUrls: ['./signed-out.component.css']
})
export class SignedOutComponent implements OnInit, OnDestroy {

mobileno =`7600568319`


  constructor(private router: Router) { }

  ngOnInit() {

  }

  ngOnDestroy() {
  }

}

