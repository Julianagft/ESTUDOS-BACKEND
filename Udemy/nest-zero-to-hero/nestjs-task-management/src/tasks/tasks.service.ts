import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v7 as uuid } from 'uuid';

@Injectable() //singleton that can be shared across the application.
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    createTask (title: string, description: string): Task {
        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN,
        };
        
        this.tasks.push(task);

        return task;    
    }
}

