import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  isExpanded: boolean = false;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  constructor(private breakpointObserver: BreakpointObserver) {}
  scroll(el: HTMLElement) {

    el.scrollIntoView({ behavior: 'smooth' });

  }

  toHome() {
    document.getElementById("home")?.scrollIntoView({behavior:"smooth"});
  }
  toPrice() {
    document.getElementById("price")?.scrollIntoView({behavior:"smooth"});
  }
  toAbout() {
    document.getElementById("about")?.scrollIntoView({behavior:"smooth"});
  }
  toContact() {
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});
  }
  toService() {
    document.getElementById("service")?.scrollIntoView({behavior:"smooth"});
  }




}
