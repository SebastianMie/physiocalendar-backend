import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import Absence from './Absence';
import Exception from './Exception';
import Appointment from './Appointment';
import AppointmentSeries from './AppointmentSeries';

@Entity()
export default class Therapist {
    @PrimaryColumn()
    id!: string;

    @Column()
    name!: string;

    @Column({ type: 'date' })
    activeSince!: Date;

    @Column({ type: 'date' })
    activeUntil!: Date;

    @OneToMany(() => Absence, absence => absence.therapist)
    absences!: Absence[];

    @OneToMany(() => Exception, exception => exception.therapist)
    exceptions!: Exception[];

    @OneToMany(() => Appointment, appointment => appointment.therapist)
    appointments!: Appointment[];

    @OneToMany(() => AppointmentSeries, appointmentSeries => appointmentSeries.therapist)
    appointmentSeries!: AppointmentSeries[];
}
