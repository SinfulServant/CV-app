import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomePartComponent } from './components/welcome-part/welcome-part.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AppearanceAnimationDirective } from './directives/appear-animation.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './shared-components/button/button.component';
import { ArrToUpComponent } from './shared-components/arr-to-up/arr-to-up.component';
import { HttpClientModule } from '@angular/common/http';
import { GetUrlsService } from './services/get-urls.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomePartComponent,
    SkillsComponent,
    PortfolioComponent,
    AboutMeComponent,
    ContactsComponent,
    ButtonComponent,
    ArrToUpComponent,
  ],
  imports: [
    BrowserModule,
    AppearanceAnimationDirective,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [GetUrlsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
