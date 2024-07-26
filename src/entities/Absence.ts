import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Therapist from './Therapist';

@Entity()
export default class Absence {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Therapist, (therapist: Therapist) => therapist.absences)
    therapist!: Therapist;
  
    @Column()
    day!: string;

    @Column({ type: 'time' })
    startTime!: string;

    @Column({ type: 'time' })
    endTime!: string;
}
