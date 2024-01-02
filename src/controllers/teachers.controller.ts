
import { Controller, Get, Post, Body } from '@nestjs/common';
import { Teacher } from '../entities/teacher.entity';
import { TeachersService } from '../services/teachers.service';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Get()
  async findAll(): Promise<Teacher[]> {
    return this.teachersService.findAll();
  }

  @Post()
  async create(@Body() teacherData: Teacher): Promise<Teacher> {
    return this.teachersService.create(teacherData);
  }
}
