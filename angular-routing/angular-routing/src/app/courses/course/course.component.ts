import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {

  constructor(private service: CoursesService, private route: ActivatedRoute, private router: Router) { }


  course: { id: number; name: string; author: string; duration: number; type: string; price: number; ratings: number; image: string; description: string; } = {
    id: 0,
    name: '',
    author: '',
    duration: 0,
    type: '',
    price: 0,
    ratings: 0,
    image: '',
    description: '',
  };
  // | undefined = undefined;
  courseId: any;
  routeParamObs: any;
  editMode: boolean = false;

  ngOnInit(): void {

    // <!-- Retrieve the route parameter using Snapshot  -->

    //this.courseId = this.route.snapshot.params['id'];
    //this.courseId = this.route.snapshot.params['name'];
    //this.course = this.service.courses.find(x => x.id == this.courseId);

    // <!-- Retrieve the route parameter using Observables  -->

    // this.routeParamObs = this.route.paramMap.subscribe((par) => {
    //   this.courseId = par.get('id');
    //   if (this.courseId !== null) {
    //   this.course = this.service.courses.find(x => x.id == this.courseId);
    //   }
    // });

    this.routeParamObs = this.route.paramMap.subscribe((par) => {
      this.courseId = par.get('id');
      const foundCourse = this.service.courses.find(x => x.id == this.courseId);
      if (foundCourse) {
        this.course = foundCourse;
      } else {
        // Handle the case where the course with the specified ID is not found
        // You can set this.course to a default value or display an error message
      }
    });

    //  // <!-- Retrieve the Query parameter using Snapshot  -->
    // this.editMode = Boolean(this.route.snapshot.queryParamMap.get('edit'));
    // console.log(this.editMode);

    // <!-- Retrieve the Query parameter using Observables  -->

    this.route.queryParamMap.subscribe((param) => {
      this.editMode = Boolean(param.get('edit'));
    });

  }

  ngOnDestroy() {
    this.routeParamObs.unsubscribe();
  }

  //In order to use the navigate route we need to  inject the router class 

  appendQueryParam() {
    this.router.navigate(['/Courses/Course', this.courseId], { queryParams: { edit: true } });
  }

}
