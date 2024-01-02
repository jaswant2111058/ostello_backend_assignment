import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Teachers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  subject: string;
}
