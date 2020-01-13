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
    // AutofocusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
