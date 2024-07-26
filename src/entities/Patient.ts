import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import Appointment from './Appointment';
import AppointmentSeries from './AppointmentSeries';
import Cancellation from './Cancellation';

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
