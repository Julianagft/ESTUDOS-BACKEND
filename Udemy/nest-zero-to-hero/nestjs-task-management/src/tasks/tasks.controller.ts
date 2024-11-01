import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { Task } from './task.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';

@Controller('tasks')
@UseGuards(AuthGuard()) //Auth midleware pra proteger a rota. 
export class TasksController {
    constructor(private taskService: TasksService) {}

    @Get()
    getTasks(@Query() filterDto: GetTasksFilterDto): Promise<Task[]> {
        return this.taskService.getTasks(filterDto);
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Promise<Task> {
        return this.taskService.getTaskById(id);
    }

    @Post()
    async createTask(
        @Body() createTaskDto: CreateTaskDto,
        @GetUser() user: User
    ): Promise<Task> {
        try {
            return await this.taskService.createTask(createTaskDto, user);
        } catch (error) {
            throw new HttpException(`Erro ao criar a tarefa: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string): Promise<void> {
        return this.taskService.deleteTask(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id: string,
        @Body() updateTaskStatusDto: UpdateTaskStatusDto,
        ): Promise<Task> {
            const { status } = updateTaskStatusDto;
            return this.taskService.updateTaskStatus(id, status);
        }
}
