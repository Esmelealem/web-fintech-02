import { Component, OnDestroy, OnInit } from '@angular/core';
// import {MediaChange, MediaObserver } from '@angular/flex-layout';
// import {  } from "@angular/flex-layout";
//  import { MediaChange } from '../media-change';


import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  mediaSub: Subscription;
  deviceXs: boolean;
  activeMediaQuery = '';

  // constructor(private mediaObserver: MediaObserver) {}
  ngOnInit()
   {
    // this.mediaSub = this.mediaObserver.asObservable().
    //   .subscribe(
    //     (result: MediaChange) => {
    //     console.log(result.mqAlias);
    //      this.deviceXs = result.mqAlias === 'xs' ? true : false;
    //   }
    //   );
  }
  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
}
