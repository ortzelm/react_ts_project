import { CreateEmployeesDto } from "./create-employee.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateEmployeesDto extends PartialType(CreateEmployeesDto) { }