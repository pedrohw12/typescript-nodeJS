import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('appointments') // diz que esse model será salvo na tabela 'appointments'
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider: string;

  @Column('timestamp with time zone') // se não for Postgres - colocar 'timestamp'
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Appointment;
