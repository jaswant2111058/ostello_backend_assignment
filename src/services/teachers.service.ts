
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teachers } from '../entities/teacher.entity';

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(Teachers)
    private readonly teachersRepository: Repository<Teachers>,
  ) {}

  findAll(): Promise<Teachers[]> {
    return this.teachersRepository.find();
  }

  create(teacherData: Teachers): Promise<Teachers> {
    const newTeacher = this.teachersRepository.create(teacherData);
    return this.teachersRepository.save(newTeacher);
  }
}
