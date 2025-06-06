    import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
    import { TasksService } from './tasks.service';
    import { CreateTaskDto } from './dto/create-task.dto';
    import { GetTasksFilterDto } from './dto/get-task-filter.dto';
    import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
    import { Task } from './task.entity';
    import { AuthGuard } from '@nestjs/passport';
    import { GetUser } from 'src/auth/get-user.decorator';
    import { User } from 'src/auth/user.entity';
    import { Logger } from '@nestjs/common';

    @Controller('tasks')
    @UseGuards(AuthGuard()) //Auth midleware pra proteger a rota. 
    export class TasksController {
        private logger = new Logger('TasksController');

        constructor(
            private taskService: TasksService,
            
        ) {}

        @Get()
        getTasks(@Query() filterDto: GetTasksFilterDto, @GetUser() user: User): Promise<Task[]> {
            this.logger.verbose(`User "${user.username}" retrieving all tasks. Filters: ${JSON.stringify(filterDto)}`);
            return this.taskService.getTasks(filterDto, user);
        }

        @Get('/:id')
        getTaskById(@Param('id') id: string, @GetUser() user: User): Promise<Task> {
            return this.taskService.getTaskById(id, user);
        }

        @Post()
        async createTask(
            @Body() createTaskDto: CreateTaskDto,
            @GetUser() user: User
        ): Promise<Task> {
            this.logger.verbose(`User "${user.username}" creating a new task. Data: ${JSON.stringify(createTaskDto)}`);
            try {
                return await this.taskService.createTask(createTaskDto, user);
            } catch (error) {
                throw new HttpException(`Erro ao criar a tarefa: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        @Delete('/:id')
        deleteTask(
            @Param('id') id: string, 
            @GetUser() user: User,
        ): Promise<void> {
            return this.taskService.deleteTask(id, user);
        }

        @Patch('/:id/status')
        updateTaskStatus(
            @Param('id') id: string,
            @Body() updateTaskStatusDto: UpdateTaskStatusDto,
            @GetUser() user: User,
            ): Promise<Task> {
                const { status } = updateTaskStatusDto;
                return this.taskService.updateTaskStatus(id, status, user);
            }
    }
