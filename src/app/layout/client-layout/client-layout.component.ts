import { Component, OnInit } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.scss']
})
export class ClientLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
