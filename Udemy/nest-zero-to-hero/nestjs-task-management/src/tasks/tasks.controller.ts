import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskStatus } from './task-status-enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) {}

    // @Get()
    // getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
    //     // Caso exista algum filtro.
    //     if (Object.keys(filterDto).length) {
    //         return this.taskService.getTasksWithFilters(filterDto);
    //     } else {
    //       return this.taskService.getAllTasks();  
    //     }
        
    // }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Promise<Task> {
        return this.taskService.getTaskById(id);
    }

    @Post()
    async createTask(@Body() createTaskDto: CreateTaskDto
    ): Promise<Task> {
        try {
            return await this.taskService.createTask(createTaskDto);
        } catch (error) {
            throw new HttpException(`Erro ao criar a tarefa: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



    // @Delete('/:id')
    // deleteTask(@Param('id') id: string): void {
    //     this.taskService.deleteTask(id);
    // }

    // @Patch('/:id/status')
    // updateTaskStatus(
    //     @Param('id') id: string,
    //     @Body() updateTaskStatusDto: UpdateTaskStatusDto,
    //     ): Task {
    //         const { status } = updateTaskStatusDto;
    //         return this.taskService.updateTaskStatus(id, status);
    //     }
}
