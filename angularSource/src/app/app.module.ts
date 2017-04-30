import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClientComponent } from './components/clientPage/clientPage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotiCardComponent } from './components/noti-card/noti-card.component';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { DataFieldComponent } from './components/data-field/data-field.component';
import { DraggableDirective } from './components/data-field/DraggableDirective';
import { DropTargetDirective } from './components/data-field/DropTargetDirective';
import { DragService } from './components/data-field/DragService';
import {UserService} from './components/UserService';
import { ResumePageComponent } from './components/resume-page/resume-page.component';
import { ViewerPageComponent } from './components/viewer-page/viewer-page.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'resume', component: ViewerPageComponent },
  { path: 'train', component: ResumePageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    NavbarComponent,
    NotiCardComponent,
    ProfileViewComponent,
    ProfileEditComponent,
    DataFieldComponent,
    DraggableDirective,
    DropTargetDirective,
    ResumePageComponent,
    ViewerPageComponent,
    MainpageComponent
  
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DragService],
  bootstrap: [AppComponent]
})
export class AppModule { }
