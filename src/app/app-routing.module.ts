import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NopageComponent } from './nopage/nopage.component';
import { DemoComponent } from './democomp/demo.component';
import { CoursesComponent } from './courses/courses.component';
import { PipeFilterComponent } from './pipe-filter/pipe-filter.component';
import { FormComponent } from './form/form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: DemoComponent},
    {path: 'demo', component: DemoComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'filters', component: PipeFilterComponent},
    {path: 'templateForms', component: TemplateFormComponent},
    {path: 'reactiveForms', component: ReactiveFormComponent},
    {path: 'forms/:param1/:param2', component: FormComponent},
    {path: '**', component: NopageComponent},
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
