import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() students: any;
  @Output() msg = new EventEmitter();

  ngOnInit() {

  }

  ngAfterContentChecked() {
    if (this.students) {
      this.students = this.students.map((x) => {
        x.cssM = x.maths >= 40 ? 'text-info' : 'text-danger';
        x.cssP = x.physics >= 40 ? 'text-info' : 'text-danger';
        return x;
      });
    }
  }

  sendEvent(event) {
    this.msg.emit(event.target.parentNode);
  }

}
