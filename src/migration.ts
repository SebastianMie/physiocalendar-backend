import "reflect-metadata";
import { DataSource, QueryRunner } from 'typeorm';
import Therapist from './entities/Therapist';
import Appointment from './entities/Appointment';
import AppointmentSeries from './entities/AppointmentSeries';
import * as fs from 'fs';

// Pfad zur JSON-Datei (relative zum Standort dieser Skriptdatei anpassen)
const jsonData = JSON.parse(fs.readFileSync('./data/backup.json', 'utf8'));

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "physiouser", // Hier Benutzername einsetzen
  password: "password",      // Hier Passwort einsetzen
  database: "physiocalendar",    // Hier Datenbanknamen einsetzen
  entities: [Therapist, Appointment, AppointmentSeries],
  synchronize: true,
  logging: false
});

AppDataSource.initialize()
  .then(async () => {
    console.log("Datenquelle wurde erfolgreich initialisiert!");
    const runner = AppDataSource.createQueryRunner();
    await runner.startTransaction();
    try {
      await migrateData(jsonData, runner);
      await runner.commitTransaction();
      console.log("Migration completed successfully.");
    } catch (error) {
      console.error("Error during migration", error);
      await runner.rollbackTransaction();
    } finally {
      await runner.release();
    }
  })
  .catch(error => console.error("Error during Data Source initialization", error));

async function migrateData(data: { therapists: any[]; appointments: any[]; appointmentseries: any[]; }, runner: QueryRunner) {
  const therapistRepository = runner.manager.getRepository(Therapist);
  const appointmentRepository = runner.manager.getRepository(Appointment);
  const appointmentSeriesRepository = runner.manager.getRepository(AppointmentSeries);

  // Therapeuten migrieren
  for (const therapistData of data.therapists) {
    const therapist = therapistRepository.create({
      id: therapistData.id,
      name: therapistData.name,
      activeSince: new Date(therapistData.activeSince * 1000), // UNIX timestamp in Millisekunden umwandeln
      activeUntil: new Date(therapistData.activeUntil * 1000)
    });
    await therapistRepository.save(therapist);
  }

  // Termine migrieren
  for (const appointmentData of data.appointments) {
    const appointment = appointmentRepository.create({
      ...appointmentData,
      date: new Date(appointmentData.date),
      startTime: appointmentData.startTime,
      endTime: appointmentData.endTime
    });
    await appointmentRepository.save(appointment);
  }

  // Serientermine migrieren
  for (const seriesData of data.appointmentseries) {
    const series = appointmentSeriesRepository.create({
      ...seriesData,
      startDate: new Date(seriesData.startDate),
      endDate: new Date(seriesData.endDate),
      startTime: seriesData.startTime,
      endTime: seriesData.endTime
    });
    await appointmentSeriesRepository.save(series);
  }
}
