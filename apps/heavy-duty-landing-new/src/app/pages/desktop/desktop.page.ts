import { Component } from '@angular/core';
import { NavbarDesktopComponent } from '../../components/core/navbar.dekstop';
import { HeroDesktopComponent } from '../../components/section/hero.desktop.section';
import { AboutSectionDesktopComponent } from '../../components/section/about-us.desktop.section';
import { WhatWeDoDesktopComponent } from '../../components/section/what-we-do.desktop.section';
import { ContactUsSectionDesktopComponent } from '../../components/section/contact-us.desktop.section';
import { FooterDesktopComponent } from '../../components/core/footer.desktop';
@Component({
  standalone: true,
  imports: [
    NavbarDesktopComponent,
    HeroDesktopComponent,
    AboutSectionDesktopComponent,
    WhatWeDoDesktopComponent,
    ContactUsSectionDesktopComponent,
    FooterDesktopComponent
  ],
  selector: 'hdb-app-desktop',
  template: `
    {{ text }}
    <!-- Navbar -->
    <hdb-navbar-desktop></hdb-navbar-desktop>

    <!-- Hero block with CTA -->
    <hdb-hero-desktop></hdb-hero-desktop>

    <!-- About us section -->
    <hdb-about-us-desktop></hdb-about-us-desktop>

    <!-- What we do section -->
    <hdb-what-we-do-desktop></hdb-what-we-do-desktop>

    <!-- Contact Us section-->
    <hdb-contact-us-desktop></hdb-contact-us-desktop>

    <!-- Footer -->
    <hdb-footer-desktop></hdb-footer-desktop>
  `,
  styles: ``,
})
export class AppDesktopComponent {
  text = 'Desktop Text';
}
