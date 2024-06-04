import { Component } from '@angular/core';
import { NavbarMobileComponent } from '../../components/core/navbar.mobile';
import { HeroMobileComponent } from '../../components/section/hero.mobile.section';
import { AboutSectionMobileComponent } from '../../components/section/about-us.mobile.section';
import { WhatWeDoMobileComponent } from '../../components/section/what-we-do.mobile.section';
import { ContactUsSectionMobileComponent } from '../../components/section/contact-us.mobile.section';
import { FooterMobileComponent } from '../../components/core/footer.mobile';
@Component({
  standalone: true,
  imports: [
    NavbarMobileComponent,
    HeroMobileComponent,
    AboutSectionMobileComponent,
    WhatWeDoMobileComponent,
    ContactUsSectionMobileComponent,
    FooterMobileComponent
  ],
  selector: 'hdb-app-mobile',
  template: `
    <!-- Navbar -->
    <hdb-navbar-mobile></hdb-navbar-mobile>

    <!-- Hero block with CTA -->
    <hdb-hero-mobile></hdb-hero-mobile>

    <!-- About us section -->
    <hdb-about-us-mobile></hdb-about-us-mobile>

    <!-- What we do section -->
    <hdb-what-we-do-mobile></hdb-what-we-do-mobile>

    <!-- Contact Us section-->
    <hdb-contact-us-mobile></hdb-contact-us-mobile>

    <!-- Footer -->
    <hdb-footer-mobile></hdb-footer-mobile>
  `,
  styles: ``,
})
export class AppMobileComponent {
  text = 'Mobile Text';
}
