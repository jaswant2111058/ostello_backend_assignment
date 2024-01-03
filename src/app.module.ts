import { config } from 'dotenv';
config();
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsController } from './controllers/students.contoller';
import { TeachersController } from './controllers/teachers.controller';
import { StudentsService } from './services/students.service';
import { TeachersService } from './services/teachers.service';
import { Student } from './entities/student.entity';
import { Teachers } from './entities/teacher.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database-2.cjiaoqigi3o0.us-east-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgresJassi',
      password: 'Jassi#2002',
      database: 'Jassidb',
      entities: [Student, Teachers],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Student, Teachers]),
  ],
  controllers: [StudentsController, TeachersController],
  providers: [StudentsService, TeachersService],
})
export class AppModule {}
