import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Routes, RouterModule} from "@angular/router";
import {FatherComponent} from './father/father.component'
import {MotherComponent} from './mother/mother.component'
import {TodoComponent} from './todo/todo.component'
import {AppRouterModule} from './app-router/app-router.module';
import { SortPipe } from './pipes/sort.pipe';
import { TemplateformComponent } from './forms/template/templateform/templateform.component';
import { ModelFormComponent } from './forms/model/model-form/model-form.component';
import { AutoSearchComponent } from './search/auto-search/auto-search.component';
import { MuCustomFilterPipe } from './pipes/mu-custom-filter.pipe'
import {LocalserviceService} from './services/localservice.service'
import {RemoteserviceService} from './services/remoteservice.service'
import { ConsumelocalComponent } from './consume/consumelocal/consumelocal.component'
import {HttpClientModule} from '@angular/common/http'
import { ConsumeremoteComponent } from './consume/consumeremote/consumeremote.component'
import { BasicannimationComponent } from './annotation/basicannimation/basicannimation.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentComponent } from './parent-child/parent/parent.component';
import { ChildComponent } from './parent-child/child/child.component';
import { NotfoundComponent } from './notfound/notfound/notfound.component';
import { NuclearComponent } from './family/nuclear/nuclear.component';
import { InbuilddirectiveComponent } from './directive/inbuilddirective/inbuilddirective.component';
import { SetbgDirective } from './customDirective/setbg.directive'
import { UsedirectiveComponent } from './customDirective/usedirective/usedirective.component';

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    MotherComponent,
    TodoComponent,
    SortPipe,
    TemplateformComponent,
    ModelFormComponent,
    AutoSearchComponent,
    MuCustomFilterPipe,
    ConsumelocalComponent,
    ConsumeremoteComponent,
    BasicannimationComponent,
    ParentComponent,
    ChildComponent,
    NotfoundComponent,
    NuclearComponent,
    InbuilddirectiveComponent,
    SetbgDirective,
    UsedirectiveComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRouterModule
  ],
  providers: [LocalserviceService,RemoteserviceService],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
