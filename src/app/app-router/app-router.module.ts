import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FatherComponent} from './../father/father.component'
import {MotherComponent} from './../mother/mother.component'
import {TodoComponent} from './../todo/todo.component'
import {Routes, RouterModule} from "@angular/router";
import { TemplateformComponent } from '../forms/template/templateform/templateform.component';
import { ModelFormComponent } from '../forms/model/model-form/model-form.component';
import { AutoSearchComponent } from '../search/auto-search/auto-search.component';
import { ConsumelocalComponent } from '../consume/consumelocal/consumelocal.component';
import { ConsumeremoteComponent } from '../consume/consumeremote/consumeremote.component';
import { BasicannimationComponent } from '../annotation/basicannimation/basicannimation.component';
import { ParentComponent } from '../parent-child/parent/parent.component';
import { ChildComponent } from '../parent-child/child/child.component';
import { InbuilddirectiveComponent } from '../directive/inbuilddirective/inbuilddirective.component';
import { NuclearComponent } from '../family/nuclear/nuclear.component';
import { NotfoundComponent } from '../notfound/notfound/notfound.component';
import { UsedirectiveComponent } from '../customDirective/usedirective/usedirective.component';
export const routes: Routes = [
  { path: '', redirectTo: 'todo' ,pathMatch:'full'},
  { path: 'todo', component: TodoComponent },
  { path: 'template', component: TemplateformComponent },
  { path: 'model', component: ModelFormComponent },
  { path: 'searchFilter', component: AutoSearchComponent },
  {path: 'localService',component:ConsumelocalComponent},
  {path: 'consumeremoteComponent',component:ConsumeremoteComponent},
  {path: 'basicannimationComponent',component:BasicannimationComponent},
  {path: 'parent',component:ParentComponent},
  {path: 'child',component:ChildComponent},
  {path: 'directive',component:InbuilddirectiveComponent},
  {
    path:'nuclear',
    component:NuclearComponent,
    children:[
      { path: 'father', component: FatherComponent },
      { path: 'mother', component: MotherComponent },
      { path: '', redirectTo: 'father' ,pathMatch:'full'}     
    ]

  },
  {path: 'customdirective',component:UsedirectiveComponent},
  {path: '**',component:NotfoundComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRouterModule { }
