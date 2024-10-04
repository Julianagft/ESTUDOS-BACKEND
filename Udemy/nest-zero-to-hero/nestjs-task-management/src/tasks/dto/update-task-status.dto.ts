import { IsEnum } from "class-validator";
import { TaskStatus } from "../task-status-enum";

export class UpdateTaskStatusDto {
    @IsEnum(TaskStatus) // Valida pra mim se o status é pelo menos um daqueles dados no enum.

    status: TaskStatus;
}