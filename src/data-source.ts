import { DataSource } from 'typeorm';
import Therapist from './entities/Therapist.js';
import Appointment from './entities/Appointment.js';
import AppointmentSeries from './entities/AppointmentSeries.js';

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "physiouser",
  password: "password",
  database: "physiocalendar",
  entities: [Therapist, Appointment, AppointmentSeries],
  synchronize: true,
  logging: false
});
