import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { ContactComponent } from './contact/contact.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './articles/article/article.component';
import { ArticlesHomeComponent } from './articles/articles-home/articles-home.component';
import { NewsletterComponent } from './libs/newsletter/newsletter.component';
import { CardComponent } from './articles/card/card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TruncatePipe } from './libs/pipes/truncate.pipe';
import { CookieService } from 'ngx-cookie-service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

//NGX Bootstrap
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AlertModule } from 'ngx-bootstrap/alert';

// Material 
import {MatSidenavModule} from '@angular/material/sidenav';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIconModule} from '@angular/material/icon';
import { FavsComponent } from './articles/favs/favs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ArticlesComponent,
    ArticleComponent,
    ArticlesHomeComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CardComponent,
    TruncatePipe,
    NewsletterComponent,
    FavsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    MatSidenavModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    InfiniteScrollModule,
    AlertModule.forRoot()
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
