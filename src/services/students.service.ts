
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from '../entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentsRepository: Repository<Student>,
  ) {}

  findAll(): Promise<Student[]> {
    return this.studentsRepository.find();
  }

  create(studentData: Student): Promise<Student> {
    const newStudent = this.studentsRepository.create(studentData);
    return this.studentsRepository.save(newStudent);
  }
}
