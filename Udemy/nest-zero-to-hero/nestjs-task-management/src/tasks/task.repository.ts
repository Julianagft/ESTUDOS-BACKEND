import { DataSource, Repository } from "typeorm";
import { Task } from "./task.entity";
import { GetTasksFilterDto } from "./dto/get-task-filter.dto";
import { Injectable } from "@nestjs/common";
import { TaskStatus } from "./task-status-enum";
import { CreateTaskDto } from "./dto/create-task.dto";

   @Injectable()
    export class TaskRepository extends Repository<Task>  {

        constructor(private dataSource: DataSource) {
            super(Task, dataSource.createEntityManager());
        }

        async getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
            const {status, search} = filterDto;

            const query = this.createQueryBuilder('task');

            if (status) {
                query.andWhere('task.status = :status', {status});
            } // Posso filtrar por status dentro da url (exemplo: /tasks?status=OPEN)

            if (search) {
                query.andWhere('LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:search)', {search: `%${search}%`});
            } // Posso pesquisar por palavras chave dentro da url (exemplo: /tasks?search=algumaCoisa)

            const tasks = await query.getMany();

            return tasks;
        }

        async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
            const {title, description} = createTaskDto;

            const task = this.create({
                title,
                description,
                status: TaskStatus.OPEN,
            })

            await this.save(task);
            return task;
        }
        
    }