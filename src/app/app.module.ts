import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomePartComponent } from './components/welcome-part/welcome-part.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AppearanceAnimationDirective } from './directives/appear-animation.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomePartComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppearanceAnimationDirective,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
