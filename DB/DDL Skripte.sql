

create table therapists (
    id varchar(255) primary key,
    name varchar(255) not null,
    activesince date not null,
    activeuntil date not null
);

create table patients (
    id varchar(255) primary key,
    firstname varchar(255) not null,
    name varchar(255) not null,
    activesince date not null,
    activeuntil date not null,
    isbwo boolean not null
);

create table appointments (
    id varchar(255) primary key,
    therapistid varchar(255) not null,
    patientid varchar(255) not null,
    starttime time not null,
    endtime time not null,
    comment text,
    date date not null,
    weekday varchar(20) not null,
    ishotair boolean not null,
    isultrasonic boolean not null,
    iselectric boolean not null,
    foreign key (therapistid) references therapists(id),
    foreign key (patientid) references patients(id)
);

CREATE TABLE appointmentseries (
    id VARCHAR(255) PRIMARY KEY,
    therapistid VARCHAR(255) NOT NULL,
    patientid VARCHAR(255) NOT NULL,
    starttime TIME NOT NULL,
    endtime TIME NOT NULL,
    comment TEXT,
    startdate DATE NOT NULL,
    enddate DATE NOT NULL,
    weekday VARCHAR(20) NOT NULL,
    appointment_interval INT NOT NULL,
    ishotair BOOLEAN NOT NULL,
    isultrasonic BOOLEAN NOT NULL,
    iselectric BOOLEAN NOT NULL,
    isbwo BOOLEAN NOT NULL,
    FOREIGN KEY (therapistid) REFERENCES therapists(id),
    FOREIGN KEY (patientid) REFERENCES patients(id)
);


create table cancellations (
    id serial primary key,
    appointmentseriesid varchar(255) not null,
    date date not null,
    patientid varchar(255) not null,
    foreign key (appointmentseriesid) references appointmentseries(id),
    foreign key (patientid) references patients(id)
);

create table absences (
    id serial primary key,
    therapistid varchar(255) not null,
    day varchar(20) not null,
    starttime time not null,
    endtime time not null,
    foreign key (therapistid) references therapists(id)
);

create table exceptions (
    id serial primary key,
    therapistid varchar(255) not null,
    day varchar(20) not null,
    starttime time not null,
    endtime time not null,
    foreign key (therapistid) references therapists(id)
);
