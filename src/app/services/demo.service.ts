import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  private data;

  constructor(private http: HttpClient) {
    this.data = 'Yo Bro!!';
  }

  getCourses() {
    return this.http.get('http://localhost:3000/courses');
  }

  getStudents() {
    return this.http.get('http://localhost:3000/students');
  }

  login(obj) {
    return this.http.post('http://localhost:3000/login', obj).subscribe(res => console.log(res));
  }
}
