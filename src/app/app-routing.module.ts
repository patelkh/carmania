import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './articles/article/article.component';
import { ArticlesHomeComponent } from './articles/articles-home/articles-home.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'articles', component: ArticlesComponent, children:[
    {path: ':id', component: ArticleComponent},
    {path: '', component: ArticlesHomeComponent}
  ]},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
