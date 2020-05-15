import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appointments') // diz que esse model será salvo na tabela 'appointments'
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: String;

  @Column()
  provider: String;

  @Column('timestamp with time zone') // se não for Postgres - colocar 'timestamp'
  date: Date;
}

export default Appointment;
