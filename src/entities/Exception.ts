import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Therapist from './Therapist.js';

@Entity()
export default class Exception {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Therapist, therapist => therapist.exceptions)
    therapist!: Therapist;

    @Column()
    day!: string;

    @Column({ type: 'time' })
    startTime!: string;

    @Column({ type: 'time' })
    endTime!: string;
}
