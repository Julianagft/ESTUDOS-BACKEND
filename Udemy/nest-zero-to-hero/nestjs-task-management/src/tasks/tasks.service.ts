import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status-enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { json } from 'stream/consumers';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';

@Injectable() //singleton that can be shared across the application.
export class TasksService {

    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
    ) {}
    

    // getAllTasks(): Task[] {
    //     return this.tasks;
    // }

    // getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
    //     const { status, search} = filterDto;

    //     let tasks = this.getAllTasks();

    //     if (status) {
    //         tasks = tasks.filter(task => task.status === status);
    //     }

    //     if (search) {
    //         tasks = tasks.filter(task => 
    //             task.title.includes(search) || 
    //             task.description.includes(search)
    //         );
    //     }

    //     return tasks;

    // }

    async getTaskById(id: string): Promise<Task> {
        const found = await this.taskRepository.findOne({ where: { id } });

        if (!found) {
            throw new NotFoundException(`Task with ${id} not found`);   
        }

        return found;
    }

    // createTask (createTaskDto: CreateTaskDto): Task {
    //     const { title, description } = createTaskDto;

    //     const task: Task = {
    //         id: uuid(),
    //         title,
    //         description,
    //         status: TaskStatus.OPEN,
    //     };
        
    //     this.tasks.push(task);

    //     return task;    
    // }

        async createTask (createTaskDto: CreateTaskDto): Promise<Task> {
            try {
                const { title, description } = createTaskDto;
        
                const task = this.taskRepository.create({
                    title,
                    description,
                    status: TaskStatus.OPEN,
                });
        
                await this.taskRepository.save(task);
                return task;
            } catch (error) {
                console.error('Erro ao salvar a tarefa no repositório:', error);
                throw new Error('Erro ao salvar a tarefa no repositório');
            }
        }

    // deleteTask(id: string): void {
    //     const found = this.getTaskById(id);
    //     this.tasks = this.tasks.filter(task => task.id !== id);
    // }

    // updateTaskStatus(id: string, status: TaskStatus){
    //     const task = this.getTaskById(id);
    //     task.status = status;
    //     return task;
    // }
 
}

