import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateEmployeesDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    role: string;

    @IsBoolean()
    isActive: boolean;
}