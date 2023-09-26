import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../Services/courses.service';
import { ActivatedRoute } from '@angular/router';

// Define the Course type here
interface Course {
  id: number;
  name: string;
  author: string;
  duration: number;
  type: string;
  price: number;
  ratings: number;
  image: string;
  description: string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private coursesService: CoursesService, private route: ActivatedRoute) { }

  //courses = [];
  courses: Course[] = [];
  ngOnInit(): void {
    //this.courses = this.coursesService.courses;
    // this.coursesService.getAllCourses().then((data: Course[]) => {
    //   this.courses = data;
    // });

    this.courses = this.route.snapshot.data['courses'];
  }

}
