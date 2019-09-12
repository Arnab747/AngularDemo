import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent implements OnInit {

  courses;
  students;
  pf = '';
  pfCss = '';

  constructor(private service: DemoService, private cd: ChangeDetectorRef) {
    service.getCourses().subscribe(res => {
      this.courses = res;
      this.cd.markForCheck();
    });
    service.getStudents().subscribe(res => {
      this.students = res;
      this.cd.markForCheck();
    });
  }

  ngOnInit() {

  }



  getEvent(data) {
    const maths = data.children[1].innerHTML;
    const physics = data.children[2].innerHTML;
    this.pf = maths < 40 && physics < 40 ? 'Failed in Both !' : physics < 40 ? 'Failed in Physics !' : maths < 40 ? 'Failed in Maths !' : 'Passed !';
    this.pfCss = this.pf == 'Passed !' ? 'success' : 'danger';
    console.log('Changed View');
  }
}
