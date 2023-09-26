import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../Services/courses.service';

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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private coursesService: CoursesService) { }

  //courses = [];
  courses: Course[] = []; 

  ngOnInit(): void {
    
    this.courses = this.coursesService.courses ;
  }

}
