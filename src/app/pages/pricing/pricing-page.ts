import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing-page',
  imports: [],
  templateUrl: './pricing-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPage implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);
  private platform = inject(PLATFORM_ID);

  ngOnInit() {
    //this.title.setTitle('Pricing Page');
    // this.meta.updateTag({ name: 'description', content: 'Este es mi Pricing Page'});
    // this.meta.updateTag({ name: 'og:title', content: 'Pricing Page'});
    // this.meta.updateTag({ name: 'keywords', content: 'Hola,Mundo,Angular'});

    // console.log(isPlatformServer(this.platform));
    // console.log(isPlatformBrowser(this.platform));

  // No se debe usa en angular poorque no cambia el title en el SSR.
    // if( isPlatformBrowser(this.platform) ) {
    //   document.title = 'Pricing Page';
    // }
  }
}
