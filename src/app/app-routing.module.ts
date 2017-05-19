import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from 'app/about/about.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'about' },
  { path: 'gallery', component: GalleryComponent },
  { path: 'about', component: AboutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
