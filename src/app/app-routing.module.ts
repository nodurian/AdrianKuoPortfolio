import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { IntroComponent } from './intro/intro.component';
// import { AboutComponent } from './about/about.component';
// import { WorkComponent } from './work/work.component';
// import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: IntroComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'work', component: WorkComponent },
  // { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
