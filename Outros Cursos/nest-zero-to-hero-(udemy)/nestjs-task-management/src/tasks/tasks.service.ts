import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable() //singleton that can be shared across the application.
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }
}
