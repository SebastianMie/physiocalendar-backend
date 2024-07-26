import "reflect-metadata";
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { DataSource } from 'typeorm';
import Therapist from './entities/Therapist.js';
import Appointment from './entities/Appointment.js';
import AppointmentSeries from './entities/AppointmentSeries.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const AppDataSource = new DataSource({
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

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/therapists', async (req, res) => {
    const therapistRepository = AppDataSource.getRepository(Therapist);
    const therapists = await therapistRepository.find();
    res.json(therapists);
});

AppDataSource.initialize()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server läuft auf http://localhost:${port}`);
        });
    })
    .catch((error) => console.log("Error: ", error));
