import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { EmployeesService } from './employee.service';
import { CreateEmployeesDto } from './dto/create-employee.dto';
import { UpdateEmployeesDto } from './dto/update-employee.dto';

@Controller('employees')
export class EmployeesController {
    constructor(private employeesService: EmployeesService) { }

    @Get()
    findAll(@Query('role') role?: string) {
        return this.employeesService.findAll(role);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.employeesService.findOne(id);
    }

    @Post()
    create(@Body(ValidationPipe) employee: CreateEmployeesDto) {
        return this.employeesService.create(employee);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body(ValidationPipe) employee: UpdateEmployeesDto
    ) {
        return this.employeesService.update(id, employee);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.employeesService.remove(id);
    }
}
