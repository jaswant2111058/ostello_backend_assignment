import { Controller, Get, Post, Body, UseFilters } from '@nestjs/common';
import { Student } from '../entities/student.entity';
import { StudentsService } from '../services/students.service';
import { CustomExceptionFilter } from '../filters/custom-exception.filter'; // Import your custom exception filter

@Controller('students')
@UseFilters(new CustomExceptionFilter())
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  async findAll(): Promise<Student[]> {
    return this.studentsService.findAll();
  }

  @Post()
  async create(@Body() studentData: Student): Promise<Student> {
    return this.studentsService.create(studentData);
  }
}
