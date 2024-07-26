import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Absence from './Absence.js';
import Exception from './Exception.js';
import Appointment from './Appointment.js';
import AppointmentSeries from './AppointmentSeries.js';

@Entity()
export default class Therapist {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({ type: 'date' })
    activeSince!: Date;

    @Column({ type: 'date' })
    activeUntil!: Date;

    @OneToMany(() => Absence, (absence) => absence.therapist)
    absences!: Absence[];

    @OneToMany(() => Exception, (exception) => exception.therapist)
    exceptions!: Exception[];

    @OneToMany(() => Appointment, (appointment) => appointment.therapist)
    appointments!: Appointment[];

    @OneToMany(() => AppointmentSeries, (appointmentSeries) => appointmentSeries.therapist)
    appointmentSeries!: AppointmentSeries[];
}
