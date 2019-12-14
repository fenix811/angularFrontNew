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
    //const sourse = fromEvent(document, 'click');
    // const sourse = of('qwe');

    // sourse.pipe(
    //   map(myVar => myVar.toUpperCase()),
    //   map(myVar1 => myVar1 + '1'),
    //   tap(() => {
    //     debugger;
    //   }),
    //   switchMap(q => {
    //     debugger;
    //     return q + 2})
    // )
    // .subscribe((foo) => {
    // debugger;
    // console.log(foo)
    // }
    // );
  }

}
