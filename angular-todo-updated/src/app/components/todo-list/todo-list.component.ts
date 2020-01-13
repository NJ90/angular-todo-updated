import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { animate, transition, style, trigger } from '@angular/animations';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
      style({opacity:0, transform: 'translateY(30px)'}),
      animate(500, style({ opacity:1, transform:'translateY(0px)'}))
    ]),
 
    transition(':leave', [
      animate(500, style({ opacity:0, transform:'translateY(30px)'}))
    ]),
   ])
  ]
})

export class TodoListComponent implements OnInit {
  todos: Todo[];//todo-list 배열 생성해줌
  todoTitle: string;
  idForTodo: number;
  beforeEditCache: string;//todo list 수정할 때 before이 어떤글이었는지 확인할 수 있도록
  filter: string;

  constructor() { }

  ngOnInit() {
    this.filter= 'all';
    this.beforeEditCache='';
    this.idForTodo = 4;
    this.todoTitle = '';
    this.todos = [
      {
        'id':1,
        'title':'todo-1',
        'completed': false,
        'editing': false,//더블클릭했을 때 todo list를 수정할 수 있도록 
      },
      {
        'id':2,
        'title':'todo-2',
        'completed': false,
        'editing': false,
      },
      {
        'id':3,
        'title':'todo-3',
        'completed': false,
        'editing': false,
      },
    ];
  }

  addTodo():void{
    if (this.todoTitle.trim().length === 0){
      return; //빈칸일때 입력 안되도록
    }

    this.todos.push({
      id: this.idForTodo,//this에서 id값을 찾도록
      title: this.todoTitle,
      completed:false,
      editing:false
    })

   this.todoTitle='';//입력후에 빈칸으로 
   this.idForTodo++;//아이디 값이 ++되도록
  }

  editTodo(todo: Todo) : void {
    this.beforeEditCache = todo.title;
    todo.editing = true;
  }

  doneEdit(todo: Todo) : void{
    if(todo.title.trim().length === 0){
      todo.title = this.beforeEditCache;
    }
     todo.editing = false;
  }//아무것도 쓰지 않았을때 이전 title로 보여짐

  cancelEdit(todo: Todo) : void{
      todo.title = this.beforeEditCache;
      todo.editing = false;
    }

  //delet
  deleteTodo(id: Number) : void{
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  remaining() : number{
  return this.todos.filter(todo => !todo.completed).length;
  }

  atleastOneCompleted() : boolean {
    return this.todos.filter(todo => todo.completed).length > 0;
  }//최소 한개가 completed일 때 clear completed 버튼이 생겨남

  clearCompleted() : void{
    this.todos = this.todos.filter(todo => !todo.completed);
  }

  checkAllTodos(){
    this.todos.forEach(todo => todo.completed = ( <HTMLInputElement>event.target).checked)
  }

  todosFiltered(): Todo[] {
    if(this.filter ==='all'){
      return this.todos
    } else if (this.filter === 'active') {
      return this.todos.filter(todo => !todo.completed)
    } else if (this.filter === 'completed'){
      return this.todos.filter(todo => todo.completed)
    }
    return this.todos
  }
}

