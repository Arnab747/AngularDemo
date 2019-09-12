import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './democomp/demo.component';
import { Component2 } from './comp2/comp2.component';
import { CoursesComponent } from './courses/courses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NopageComponent } from './nopage/nopage.component';
import { PipeFilterComponent } from './pipe-filter/pipe-filter.component';
import { Summary } from './summary.pipe';
import { TitleCasePipe } from './title-case.pipe';
import { FormComponent } from './form/form.component';
import { StudentComponent } from './student/student.component';
import { DemoService } from './services/demo.service';
import { HttpClientModule } from '@angular/common/http';
import { InputFormatDirective } from './directives/input-format.directive';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Component2,
    CoursesComponent,
    NavbarComponent,
    NopageComponent,
    PipeFilterComponent,
    Summary,
    TitleCasePipe,
    FormComponent,
    StudentComponent,
    InputFormatDirective,
    TemplateFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DemoService],
  bootstrap: [AppComponent, Component2]
})
export class AppModule { }
