import { DataSource, Repository } from "typeorm";
import { Task } from "./task.entity";
import { GetTasksFilterDto } from "./dto/get-task-filter.dto";
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { TaskStatus } from "./task-status-enum";
import { CreateTaskDto } from "./dto/create-task.dto";
import { User } from "src/auth/user.entity";
import { Logger } from "@nestjs/common";

   @Injectable()
    export class TaskRepository extends Repository<Task>  {
        private logger = new Logger('TaskRepository', { timestamp: true });

        constructor(private dataSource: DataSource) {
            super(Task, dataSource.createEntityManager());
        }

        async getTasks(filterDto: GetTasksFilterDto, user: User): Promise<Task[]> {
            const {status, search} = filterDto;

            const query = this.createQueryBuilder('task');
            query.where({ user });

            if (status) {
                query.andWhere('task.status = :status', {status});
            } // Posso filtrar por status dentro da url (exemplo: /tasks?status=OPEN)

            if (search) {
                query.andWhere('LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:search)', {search: `%${search}%`});
            } // Posso pesquisar por palavras chave dentro da url (exemplo: /tasks?search=algumaCoisa)

            try {
                const tasks = await query.getMany();

                return tasks;
            } catch (error) {
                this.logger.error(`Failed to get tasks for user "${user.username}". Filters: ${JSON.stringify(filterDto)}`, error.stack);
                throw new InternalServerErrorException();
            }
        }

        async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
            const {title, description} = createTaskDto;

            const task = this.create({
                title,
                description,
                status: TaskStatus.OPEN,
                user,
            })

            await this.save(task);
            return task;
        }
            
    }