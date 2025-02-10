import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { IonicModule } from "@ionic/angular"

interface Task {
  id: number
  title: string
  completed: boolean
}

@Component({
  selector: "app-task-list", 
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"],
  standalone: true, 
  imports: [IonicModule, CommonModule, FormsModule], 
})
export class TodoComponent {
  // array to store tasks
  tasks: Task[] = [] 

  newTaskTitle = ""

  addTask() {
    if (this.newTaskTitle.trim()) { // ensure that task title is not empty
      const newTask: Task = {
        id: new Date().getTime(), // generate unique id based on current time
        title: this.newTaskTitle.trim(),
        completed: false, // set the task as not completed as it is just created
      }
      this.tasks.unshift(newTask) 
      this.newTaskTitle = "" // reset input field after adding task
    }
  }

  // toggle the completion status of a task
  toggleTask(task: Task) {
    task.completed = !task.completed 
  }

  // delete a task based on its id
  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(function(task) {
      return task.id !== taskId;
    });
  }
}
