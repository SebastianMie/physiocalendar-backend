import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import Appointment from './Appointment.js';
import AppointmentSeries from './AppointmentSeries.js';
import Cancellation from './Cancellation.js';

@Entity()
export default class Patient {
    @PrimaryColumn()
    id!: string;

    @Column()
    firstName!: string;

    @Column()
    name!: string;

    @Column({ type: 'date' })
    activeSince!: Date;

    @Column({ type: 'date' })
    activeUntil!: Date;

    @Column()
    isBWO!: boolean;

    @OneToMany(() => Appointment, appointment => appointment.patient)
    appointments!: Appointment[];

    @OneToMany(() => AppointmentSeries, appointmentSeries => appointmentSeries.patient)
    appointmentSeries!: AppointmentSeries[];

    @OneToMany(() => Cancellation, cancellation => cancellation.patient)
    cancellations!: Cancellation[];
}
