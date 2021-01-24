import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    if (window.pageYOffset > 50) {
      let element1 = <HTMLHeadElement>document.getElementById('idNavBar');
      let element2 = <HTMLImageElement>document.getElementById('idLogo');
      element1.classList.add('sticky');
      element2.classList.remove('header-logo');
      element2.classList.add('header-logo-scroll');

    } else {
      let element =<HTMLHeadElement>document.getElementById('idNavBar');
      let element2 = <HTMLImageElement>document.getElementById('idLogo');
      element.classList.remove('sticky');
      element2.classList.remove('header-logo-scroll');
      element2.classList.add('header-logo');
    }
  }

}
