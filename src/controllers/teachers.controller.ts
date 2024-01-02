import { Controller, Get, Post, Body, UseFilters } from '@nestjs/common';
import { Teachers } from '../entities/teacher.entity';
import { TeachersService } from '../services/teachers.service';
import { CustomExceptionFilter } from '../filters/custom-exception.filter'; // Create this filter

@Controller('teachers')
@UseFilters(new CustomExceptionFilter())
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Get()
  async findAll(): Promise<Teachers[]> {
    return this.teachersService.findAll();
  }

  @Post()
  async create(@Body() teacherData: Teachers): Promise<Teachers> {
    return this.teachersService.create(teacherData);
  }
}
