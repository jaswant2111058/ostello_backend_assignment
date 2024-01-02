
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teacher } from '../entities/teacher.entity';

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(Teacher)
    private readonly teachersRepository: Repository<Teacher>,
  ) {}

  findAll(): Promise<Teacher[]> {
    return this.teachersRepository.find();
  }

  create(teacherData: Teacher): Promise<Teacher> {
    const newTeacher = this.teachersRepository.create(teacherData);
    return this.teachersRepository.save(newTeacher);
  }
}
