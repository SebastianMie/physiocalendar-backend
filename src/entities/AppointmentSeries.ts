import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import Therapist from './Therapist';
import Patient from './Patient';
import Cancellation from './Cancellation';

@Entity()
export default class AppointmentSeries {
    @PrimaryColumn()
    id!: string;

    @ManyToOne(() => Therapist, therapist => therapist.appointmentSeries)
    therapist!: Therapist;

    @ManyToOne(() => Patient, patient => patient.appointmentSeries)
    patient!: Patient;

    @Column({ type: 'time' })
    startTime!: string;

    @Column({ type: 'time' })
    endTime!: string;

    @Column()
    comment!: string;

    @Column({ type: 'date' })
    startDate!: Date;

    @Column({ type: 'date' })
    endDate!: Date;

    @Column()
    weekday!: string;

    @Column()
    application_interval!: number;

    @Column()
    isHotair!: boolean;

    @Column()
    isUltrasonic!: boolean;

    @Column()
    isElectric!: boolean;

    @Column()
    isBWO!: boolean;

    @OneToMany(() => Cancellation, cancellation => cancellation.appointmentSeries)
    cancellations!: Cancellation[];
}
