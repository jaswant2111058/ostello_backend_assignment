
import { Controller, Get, Post, Body } from '@nestjs/common';
import { Student } from '../entities/student.entity';
import { StudentsService } from '../services/students.service';

@Controller('students')
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
