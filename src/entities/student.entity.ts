
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  course: string;

  @Column()
  class: string;

  @Column({ nullable: true })
  teachers_id: number;
}
