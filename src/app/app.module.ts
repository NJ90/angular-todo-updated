//ties everything together, where I would be importing other modules

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { from } from 'rxjs';
 
// import { AutofocusModule } from 'angular-autofocus-fix';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

//firebase 모듈 추가
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment'
import { AngularFireAuthModule } from '@angular/fire/auth'

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
    // AutofocusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
