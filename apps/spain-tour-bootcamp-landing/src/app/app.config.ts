import { HttpClientModule } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    //provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideAnimations(),
    provideRouter([]),
    importProvidersFrom([HttpClientModule]),
  ],
};