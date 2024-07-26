import { Entity, PrimaryColumn,PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Therapist from './Therapist.js';
import Patient from './Patient.js';

@Entity()
export default class Appointment {
    @PrimaryGeneratedColumn()
    id!: string;

    @ManyToOne(() => Therapist, therapist => therapist.appointments)
    therapist!: Therapist;

    @ManyToOne(() => Patient, patient => patient.appointments)
    patient!: Patient;

    @Column({ type: 'time' })
    startTime!: string;

    @Column({ type: 'time' })
    endTime!: string;

    @Column()
    comment!: string;

    @Column({ type: 'date' })
    date!: Date;

    @Column()
    weekday!: string;

    @Column()
    isHotair!: boolean;

    @Column()
    isUltrasonic!: boolean;

    @Column()
    isElectric!: boolean;
}
