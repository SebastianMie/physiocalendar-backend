import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import AppointmentSeries from './AppointmentSeries';
import Patient from './Patient';

@Entity()
export default class Cancellation {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => AppointmentSeries, appointmentSeries => appointmentSeries.cancellations)
    appointmentSeries!: AppointmentSeries;

    @Column({ type: 'date' })
    date!: Date;

    @ManyToOne(() => Patient, patient => patient.cancellations)
    patient!: Patient;
}
