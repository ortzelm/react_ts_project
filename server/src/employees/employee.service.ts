import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
import { CreateEmployeesDto } from './dto/create-employee.dto';
import { UpdateEmployeesDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeesService {
    constructor(private readonly prisma: PrismaService) { }

    async findAll(role?: string) {
        return this.prisma.employee.findMany({ where: { role } });
    }

    async create(data: CreateEmployeesDto) {
        return this.prisma.employee.create({
            data: {
                ...data,
                isActive: data.isActive ?? true, 
            },
        });
    }

    async findOne(id: number) {
        return this.prisma.employee.findUnique({ where: { id } });
    }

    async update(id: number, data: UpdateEmployeesDto) {
        return this.prisma.employee.update({
            where: { id },
            data: {
                ...data,
            },
        });
    }

    async remove(id: number) {
        return this.prisma.employee.delete({ where: { id } });
    }
}
