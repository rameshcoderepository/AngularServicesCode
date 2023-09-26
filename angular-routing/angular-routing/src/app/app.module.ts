import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './Services/courses.service';
import { CourseComponent } from './courses/course/course.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CourseGuardService } from './course-guards.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuardService } from './candeactivate-guard.service';
import { CourseResolveService } from './course-resolve.service';


// const appRoutes: Routes = [
//   { path: '', component: HomeComponent },
//   //{ path: '', redirectTo: 'Home', pathMatch: 'full' },
//   { path: 'Home', component: HomeComponent },
//   { path: 'About', component: AboutComponent },
//   { path: 'Contact', component: ContactComponent },
//   { path: 'Courses', component: CoursesComponent },
//   // { path: '/Courses/Course/:id', component: CourseComponent },
//   {
//     path: 'Courses', children: [
//       { path: 'Course/:id', component: CourseComponent },
//     ]
//   },
//   { path: '**', component: ErrorComponent }
// ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    CourseComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [CoursesService, CourseGuardService, AuthService, CanDeactivateGuardService, CourseResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
